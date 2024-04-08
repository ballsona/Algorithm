import sys
import copy
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N,M = map(int,input().split())
Map = [list(map(int, input().split())) for _ in range(N)] # 0은 빈 칸, 1은 벽, 2는 바이러스

dx = [1,-1,0,0]
dy = [0,0,1,-1]

# bfs
def getSafeArea():
    graph = copy.deepcopy(Map)
    queue = deque()
    
    for i in range(N):
        for j in range(M):
            if graph[i][j] == 2: 
                queue.append((i,j))
    
    while queue:
        tx, ty = queue.popleft()

        for i in range(4):
            nx, ny = tx + dx[i], ty + dy[i]
            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue
            if graph[nx][ny] == 0:
                graph[nx][ny] = 2
                queue.append((nx, ny))
    
    global maxArea 
    area = 0

    for i in range(N):
        area += graph[i].count(0)
    maxArea = max(maxArea, area)

# 백트래킹
def makeWall(count):

    if count == 3:
        getSafeArea()
        return 
    
    for i in range(N):
        for j in range(M):  
            if Map[i][j] == 0: # 빈 칸이라면
                Map[i][j] = 1 # 벽을 세우고
                makeWall(count+1) # 두번째 벽을 세우러 간다
                Map[i][j] = 0 # 벽을 다시 허문다 -> 백트래킹

maxArea = -1
makeWall(0)
print(maxArea)


import sys
from collections import deque

input = sys.stdin.readline

N, L, R = map(int,input().split())
Graph = [list(map(int,input().split())) for _ in range(N)]
Visited = [[False for _ in range(N)] for _ in range(N)]

dx = [-1,1,0,0]
dy = [0,0,-1,1]
 
def bfs(x,y):
    global Visited
    queue = deque() # BFS를 위한 큐
    union = deque() # 연합 저장을 위한 큐
    
    queue.append((x,y))
    union.append((x,y))
    Visited[x][y] = True
    
    while queue:
        cx, cy = queue.popleft()
        
        for i in range(4):
            nx, ny = cx + dx[i], cy + dy[i]
            if nx < 0 or nx >= N or ny < 0 or ny >= N or Visited[nx][ny]:
                continue
            if L <= abs(Graph[nx][ny] - Graph[cx][cy]) <= R:
                queue.append((nx, ny))
                union.append((nx, ny))
                Visited[nx][ny] = True
        
    # 연합 업데이트
    if len(union) > 1:
        p = sum(Graph[i][j] for i,j in union) // len(union)
        for i,j in union:
            Graph[i][j] = p

day = 0
while True:    
    count = 0
    Visited = [[False for _ in range(N)] for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if not Visited[i][j]:
                bfs(i,j)
                count += 1 
    
    # 연합 개수가 N*N개라면 인구이동 그만!
    if count == N*N:
        break
    day += 1  
    
print(day)


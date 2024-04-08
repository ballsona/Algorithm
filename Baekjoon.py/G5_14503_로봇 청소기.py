import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N, M = map(int,input().split())
r,c,d = map(int, input().split()) # 로봇 청소기 현재 좌표와 방향 정보
room = [list(map(int, input().split())) for _ in range(N)]
queue = deque()
dx, dy = [-1,0,1,0], [0,1,0,-1]
dorder = {1:0, 0:3, 3:2, 2:1}

queue.append((r,c))
room[r][c] = 2 # 청소한 칸은 2

while queue:
    x, y = queue.popleft()
    room[x][y] = 2
 
    # 반시계 방향으로 청소되지 않은 칸 있는지 확인
    isClean = True
    for i in range(4):
        d = dorder[d]
        nx, ny = x+dx[d], y+dy[d]
        if nx < 0 or nx >= N-1 or ny < 0 or ny >= M-1:
            continue
        if room[nx][ny] == 0:
            isClean = False
            queue.append((nx, ny))
            break


    # 4칸 모두 청소 되어있다면 한칸 후진
    if isClean:
        nx, ny = x-dx[d], y-dy[d]
        if nx < 0 or nx >= N-1 or ny < 0 or ny >= M-1 or room[nx][ny] == 1:
            break 
        queue.append((nx, ny))
    
clear = 0
for i in range(N-1):
    clear += room[i].count(2)

print(clear)
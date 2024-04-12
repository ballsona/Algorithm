import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

R,C,T = map(int, input().split()) # R*C 
Room = [list(map(int,input().split())) for _ in range(R)] # 미세먼지 정보

# 0. 공기청정기 x좌표 파악
x1, x2 = 0,0
for i in range(R):
    if Room[i][0] == -1: 
        x1, x2 = i,i+1
        break

# 1. 미세먼지 확산
def moveDust():
    d = ((-1,0),(1,0),(0,-1),(0,1)) # 위, 아래, 왼, 오
    newRoom = [[0]*C for _ in range(R)]

    for x in range(R):
        for y in range(C):
            if Room[x][y] > 0:
                count, dust = 0, Room[x][y] // 5

                for i in range(4):                
                    # 공기청정기 or 칸에서 벗어난다면 
                    nx, ny = x+d[i][0], y+d[i][1]
                    if nx < 0 or nx >= R or ny < 0 or ny >= C or Room[nx][ny] == -1:
                        continue
                    # 인접칸에 먼지 확산하기
                    newRoom[nx][ny] += dust
                    count += 1

                newRoom[x][y] = newRoom[x][y] + Room[x][y] - count * dust

    for x in range(R):
        Room[x] = newRoom[x] 
    Room[x1][0],Room[x2][0] = -1,-1
    
# 2. 공기청정기 작동: 위방향. 반시계 
def cleanAir_up():
    d, idx = [(0,1),(-1,0),(0,-1),(1,0)], 0 # 우, 위, 왼, 아래
    queue = deque()
    queue.append((x1,1,0))

    while queue:
        x, y,dust = queue.popleft()

        # 순환 완료
        if x == x1 and y == 0:
            break
        # 방향 전환
        if (x == x1 and y == C-1) or (x==0 and y==C-1) or (x == 0 and y == 0):
            idx += 1
        # 이동 
        nx, ny = x+d[idx][0], y+d[idx][1]
        if 0 <= nx < R and 0 <= ny < C:
            queue.append((nx, ny,Room[x][y]))
        Room[x][y] = dust

# 3. 공기청정기 작동: 아래방향. 시계 
def cleanAir_down():
    d, idx = [(0,1),(1,0),(0,-1),(-1,0)], 0 # 우, 아래, 왼, 위
    queue = deque()
    queue.append((x2,1,0))

    while queue:
        x, y,dust = queue.popleft()

        # 순환 완료
        if x == x2 and y == 0:
            break
        # 방향 전환
        if (x == x2 and y == C-1) or (x==R-1 and y==C-1) or (x == R-1 and y == 0):
            idx += 1
        # 이동 
        nx, ny = x+d[idx][0], y+d[idx][1]
        if 0 <= nx < R and 0 <= ny < C:
            queue.append((nx, ny,Room[x][y]))
        Room[x][y] = dust

# T초 후에 남아있는 미세먼지 양 출력
for _ in range(T):
    moveDust()
    cleanAir_up()
    cleanAir_down()

amount = 2
for x in range(R):
    for y in range(C):
       amount += Room[x][y]

print(amount)


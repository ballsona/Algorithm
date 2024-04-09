import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N,M = map(int, input().split( )) 
Map = [list(map(int,input().split())) for _ in range(N)]


# 치킨집과 집 좌표
homes, stores = [], []
for i in range(N):
    for j in range(N):
        if Map[i][j] == 2: stores.append((i,j))
        elif Map[i][j] == 1: homes.append((i,j))
H, S = len(homes), len(stores)
used = [0 for _ in range(S)]
dists = [[0 for _ in range(S)] for _ in range(H)] # dists[i][j] = homes[i] 와 stores[j]의 거리 

# 치킨집과 집과의 모든 거리
for i in range(H):
    for j in range(S):
        dists[i][j] = abs(homes[i][0] - stores[j][0]) + abs(homes[i][1] - stores[j][1])

# 치킨 거리 계산
def calcDistance(coords):
    global minDist
    d = 0
    
    for i in range(H): # 선택한 치킨집과 집 사이 거리 중 최솟값 선택 
        t = 1000000
        for coord in coords:
            t = min(t, dists[i][stores.index(coord)])
        d += t
    minDist = min(d, minDist)
    

## M개의 치킨집 추출(조합)
def selectStore(coords):
    if len(coords) == M:
        # 치킨 거리 계산
        print(coords)
        calcDistance(coords)
        return
        
    s = stores.index(coords[-1]) + 1 if len(coords) else 0
    for i in range(s, len(stores)):
        if used[i] == 0:
            coords.append(stores[i])
            used[i] = 1
            selectStore(coords)
            coords.pop()
            used[i] = 0
            
minDist = 100000
selectStore([])
print(minDist)
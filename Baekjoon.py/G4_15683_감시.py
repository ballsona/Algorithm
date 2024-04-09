import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N,M = map(int, input().split( )) 
Graph = [list(map(int,input().split())) for _ in range(N)] # 1~5은 CCTV, 6은 벽

ds = [[1,2,3,4],[1,2],[1,2,3,4],[1,2,3,4],[1]]
dx = [[0,0,1,-1],[],[],[]]
dy = [[1,-1,0,0],[],[],[]]

# 1번은 한쪽방향 -> 동,서,남,북 : 1,2,3,4
# 2번은 반대로 2방향 -> 가로/세로 : 1,2
# 3번은 직각으로 2방향 -> 북동, 북서, 남동, 남서 가능 : 1,2,3,4
# 4번은 3방향 -> 중앙이 동,서,남,북 가능: 1,2,3,4
# 5번은 4방향: 1

# CCTV 좌표 파악
cctvs = []
for i in range(N):
    for j in range(M):
        if 0<Graph[i][j]<=5: cctvs.append((i,j, Graph[i][j]))
C = len(cctvs)

# 사각지대 영역 구하기 
def calcArea(dirs):
    print(dirs)
    # 각 cctv 방향을 토대로 -> 감시 영역을 2로 설정 
    for i in range(C):
        cx, cy, k = cctvs[i] # cctv 좌표와 번호 
        d = dirs[i] # 방향 정보 
    # 0 개수 구하기 
    return
    

# 모든 CCTV 방향 정하기 
def checkCCTV(dir):
    if dir.count(0) == 0:
        calcArea(dir)
        return
    
    i = dir.index(0)
    for d in ds[cctvs[i][2]-1]:
        dir[i] = d
        checkCCTV(dir)
        dir[i] = 0
    
checkCCTV([0 for _ in range(C)])


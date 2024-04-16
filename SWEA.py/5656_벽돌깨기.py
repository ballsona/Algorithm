import sys
from collections import deque
from copy import deepcopy

sys.stdin = open("input.txt", "r")

d = ((-1,0),(1,0),(0,-1),(0,1))

def solution(n,h,w,blocks):
    # 벽돌 개수 n번 반복 
    for _ in range(n):
        minCount, minBlocks = 10000000,[]
        for i in range(w): 
            tempBlocks = deepcopy(blocks)
            tx, ty = i, blocks[i].index(0)-1
            print(tx, ty)

            queue = deque() # BFS   
            queue.append((tx, ty, blocks[tx][ty]-1))
            
            while queue:
                x, y, power = queue.popleft()
                # bomb
                tempBlocks[x][y] = 0
                # power만큼 확산 
                for i in range(4):
                    for p in range(1,power+1):
                        nx, ny = x+d[i][0]*p, y+d[i][1]*p
                        if nx < 0 or nx >= W or ny < 0 or ny >= H or tempBlocks[nx][ny] == 0:
                            continue
                        queue.append((nx, ny, tempBlocks[nx][ny]-1))
            
            # 벽돌 개수가 가장 적은 
            c = 0
            for i in range(W):
                for j in range(H):
                    c += tempBlocks[i][j]
            #if minCount > c:
            #    minCount, minBlocks = c, tempBlocks
            print(c, tempBlocks)
    return minCount


T = int(input())

for test_case in range(1,2):
    # ///////////////////////////////////////////////////////////////////////////////////
    N,W,H = map(int, input().split()) # 벽돌 개수, W는 가로 H는 세로 
    Blocks = [[0]*H for _ in range(W)] # H * W
    for i in range(H):
        s = list(map(int, input().split()))
        for j in range(W):
            Blocks[j][H-1-i] = s[j]

    print("#"+str(test_case),solution(N,H,W,Blocks))
    # ///////////////////////////////////////////////////////////////////////////////////

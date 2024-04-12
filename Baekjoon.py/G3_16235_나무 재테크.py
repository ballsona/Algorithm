import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N,M,K = map(int, input().split())
A = [list(map(int,input().split())) for _ in range(N)] # S2D2
F = [[5 for _ in range(N)] for _ in range(N)] # 현재 양분 정보
Trees = [[deque() for _ in range(N)] for _ in range(N)] # 나무 정보 (x,y,나이)

d = ((-1, -1), (-1, 0), (-1, +1), (0, -1), (0, +1), (+1, -1), (+1,0), (+1, +1))

# 나무 정보 입력
for _ in range(M):
    tx, ty, age = map(int, input().split())
    Trees[tx-1][ty-1].append(age)

# K년 동안 실행 
for j in range(K):

    # 봄 -> 나이만큼 양분먹고 나이+1. 어린순서대로. 만약에 남은 양분 없으면 사망.
    # 여름 -> 사망한 나무가 나이/2만큼 양분으로 변해. 
    for x in range(N):
        for y in range(N):
            if Trees[x][y]:
                newTrees = deque() # 살아남은 나무들
                dead = 0
                for age in Trees[x][y]:
                    if F[x][y] < age: # 죽어
                        dead += (age // 2)
                    else: # 살아 
                        F[x][y] -= age
                        newTrees.append(age+1)
                F[x][y] += dead
                Trees[x][y] = newTrees
    
    # 가을 -> 나이가 5배수인 나무들 번식. 인접 8칸에 새로운 나무 추가
    # 겨울 -> 각 땅에 양분 추가
    babyTrees = deque()
    for x in range(N):
        for y in range(N):
            if Trees[x][y]:
                for age in Trees[x][y]:
                    if age % 5 == 0: 
                        for dx, dy in d:
                            nx, ny = x+dx, y+dy
                            if nx < 0 or nx >= N or ny < 0 or ny >= N:
                                continue
                            babyTrees.append((nx,ny)) 
            F[x][y] += A[x][y]

    for tree in babyTrees:
        nx, ny = tree
        Trees[nx][ny].appendleft(1) # 제일 어린 나무니까 appendleft
            
count = 0
for x in range(N):
    for y in range(N):
        for t in range(len(Trees[x][y])):
            count += 1
print(count)

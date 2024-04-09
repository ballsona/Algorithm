import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N,L = map(int, input().split( )) 
Map = [list(map(int,input().split())) for _ in range(N)]
count = 0

def isValidRoad(arr):
    # 모든 칸 값이 같다면 
    if arr.count(arr[0]) == N: 
        return True

    roads = [0 for _ in range(N)]
    for i in range(N-1):
        if arr[i] == arr[i+1]:
            continue
        # 차가 1이상이면 실패
        if abs(arr[i] - arr[i+1]) > 1: 
            return False
        # 상승 구간이라면 
        if arr[i] < arr[i+1]:
            if i < L-1: 
                return False
            for j in range(i-L+1, i+1):
                if arr[j] != arr[i] or roads[j] != 0:
                    return False
                roads[j] = 1
        # 하강 구간이라면 
        if arr[i] > arr[i+1]:
            if i+1 > N - L: 
                return False
            for j in range(i+1, i+L+1):
                if arr[j] != arr[i+1] or roads[j] != 0:
                    return False
                roads[j] = 1
    return True

# 가로줄 확인
for i in range(N):
    if isValidRoad(Map[i]): 
        count += 1
    
# 세로줄 확인
for i in range(N):
    r = [Map[t][i] for t in range(N)]
    if isValidRoad(r):
        count += 1

print(count)

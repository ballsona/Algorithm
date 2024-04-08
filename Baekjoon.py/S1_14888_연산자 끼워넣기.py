import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N = int(input())
Nums = list(map(int, input().split()))
Ops = list(map(int, input().split())) # [+,-,x,%]

def calc(ops):
    global maxRes, minRes
    
    res = Nums[0]
    for i in range(N-1):
        if ops[i] == 0: res += Nums[i+1]
        elif ops[i] == 1: res -= Nums[i+1]
        elif ops[i] == 2: res *= Nums[i+1]
        elif ops[i] == 3: res = int(res / Nums[i+1])
    maxRes = max(maxRes, res)
    minRes = min(minRes, res)

def operate(arr):
    if len(arr) == N-1:
        calc(arr)
        return 

    for i in range(4):
        # 해당 연산자의 개수가 초과하지 않았다면
        if arr.count(i) < Ops[i]: 
            arr.append(i)
            operate(arr)
            arr.pop()

minRes, maxRes = 1000000000, -1000000000
operate([])
print(maxRes)
print(minRes)
    





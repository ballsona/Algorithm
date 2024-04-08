import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

N = int(input())
H = int(N/2)
S = [list(map(int, input().split())) for _ in range(N)]

def calc(t1):
    t2 = [i for i in range(1,N+1) if i not in t1]
    # 각 팀의 능력치 계산하기
    p1, p2 = 0,0
    for i in range(H):
        for j in range(H):
            if i != j:
                p1 += S[t1[i]-1][t1[j]-1]
                p2 += S[t2[i]-1][t2[j]-1]
                
    global minDiff
    minDiff = min(abs(p1 - p2), minDiff)

def comb(l):
    if len(l) == H:
        calc(l)
        return 
    
    s = l[-1]+1 if l else 1 
    for i in range(s,N+1):
        l.append(i)
        comb(l)
        l.pop()

minDiff = 1000000    
comb([])
print(minDiff)
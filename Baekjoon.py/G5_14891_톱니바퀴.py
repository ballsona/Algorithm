import sys
from collections import deque

#input = sys.stdin.readline
input = open("input.txt",'rt').readline

Wheel = [[0 for _ in range(8)] for _ in range(4)]
for i in range(4):
    s = input()
    for j in range(8):
        Wheel[i][j] = int(s[j])
K = int(input())
Ops = [list(map(int, input().split( ))) for _ in range(K)]

V = [False for i in range(4)]
R = [False for i in range(3)] # 회전 해야하면 True, 아니면 False

def rotate(t, d):

    if d == 1: # 시계
        l = Wheel[t][7]
        for i in range(7,0,-1):
            Wheel[t][i] = Wheel[t][i-1]
        Wheel[t][0] = l
    elif d == -1: # 반시계
        s = Wheel[t][0]
        for i in range(7):
            Wheel[t][i] = Wheel[t][i+1]
        Wheel[t][7] = s

    # 왼쪽
    if t != 0 and not V[t-1] and R[t-1]:
        V[t-1] = True
        rotate(t-1, -d)    
    ## 오른쪽
    if t != 3 and not V[t+1] and R[t]:
        V[t+1] = True
        rotate(t+1, -d)

# 회전 진행     
for i in range(len(Ops)):
    target, d = Ops[i]
    for j in range(3):
        R[j] = Wheel[j][2] != Wheel[j+1][6]
    for j in range(4):
        V[j] = False
        
    V[target-1] = True
    rotate(target-1, d)

# 점수 계산
score = [1,2,4,8]
sum = 0
for i in range(4):
    sum += score[i] if Wheel[i][0] == 1 else 0 # S극이면 
print(sum)
    


#1번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 1점
#2번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 2점
#3번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 4점
#4번 톱니바퀴의 12시방향이 N극이면 0점, S극이면 8점
# push_front X: 정수 X를 덱의 앞에 넣는다. //appendleft()
# push_back X: 정수 X를 덱의 뒤에 넣는다. //append
# pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다. //popleft()
# pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다. //pop()
# size: 덱에 들어있는 정수의 개수를 출력한다.
# empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
# front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
# back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

import sys
from collections import deque

n= int(sys.stdin.readline())
dq = deque([])

for i in range(n):
    command = sys.stdin.readline().strip().split(' ')
    if command[0]=='push_front':
        dq.appendleft(command[1])
    elif command[0]=='push_back':
        dq.append(command[1])
    elif command[0]=='pop_front':
        if len(dq) == 0:
            print(-1)
        else:
            print(dq.popleft())
    elif command[0]=='pop_back':
        if len(dq) == 0:
            print(-1)
        else:
            print(dq.pop())
    elif command[0] == 'size':
        print(len(dq))
    elif command[0] == 'empty':
        if len(dq) == 0:
            print(1)
        else:
            print(0)
    elif command[0]=='front':
        if len(dq) == 0:
            print(-1)
        else:
            print(dq[0])
    elif command[0]=='back':
        if len(dq) == 0:
            print(-1)
        else:
            print(dq[len(dq)-1])
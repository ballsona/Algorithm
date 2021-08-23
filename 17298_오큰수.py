
# Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다.
# 그러한 수가 없는 경우에 오큰수는 -1이다.

# 스택을 사용하려고 하는데 어떻게 해야하는데?
# stack에 현재 index를 push한다.
# 만약 현재 index가 stack[-1]인 배열값보다, i (i는 1~n-1)에 해당하는 배열값이 크다면 그 큰 값이 result가 된다.
# 만약 크지 않다면, i는 1씩 증가하여 그 다음 배열값이 오큰수의 후보가 된다... 뭔소리니.

import sys

n = int(sys.stdin.readline())
inputs = list(map(int, sys.stdin.readline().split(" ")))

result = [-1]*n
stack=[]
stack.append(0)
i=1

while stack and i < n:
    while stack and inputs[stack[-1]] < inputs[i] :
        result[stack[-1]] = inputs[i]
        stack.pop()
    stack.append(i)
    i +=1

for i in result:
    print(i, end=" ")


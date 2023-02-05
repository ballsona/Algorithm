# L : 커서를 왼쪽으로 한칸 => pop한 후 임의의 다른 스택에 저장
# D : 커서를 오른쪽으로 한칸 => 저장 중인 스택에서 문자 하나를 push
# B : 커서 왼쪽 문자 삭제 => pop한 후 저장 안함.
# P $ : $라는 문자를 왼쪽에 추가 => $를 push

import sys
temp=[]
str = list(sys.stdin.readline().rstrip())
n = int(sys.stdin.readline())

for i in range(n):
    command = list(sys.stdin.readline().rstrip())
    if command[0] == 'P':
        m = ''.join(command[2:])
        str.append(m)
    elif command[0] == 'B':
        if len(str)!=0:
            str.pop()
    elif command[0] == 'L':
        if len(str)!=0:
            temp.append(str.pop())
    elif command[0] == 'D':
        if len(temp)!=0:
            str.append(temp.pop())

if len(temp)!= 0:
    while len(temp) != 0:
        str.append(temp.pop())
print(''.join(str))


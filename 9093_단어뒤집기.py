import sys

t = int(input())
for i in range(t):
    #문장 입력받기
    case = sys.stdin.readline().split()
    #단어마다 reverse 하기
    for i in range(len(case)) :
        case[i] = ''.join(reversed(case[i]))
    #리스트 -> 문자열
    result = " ".join(case)
    print(result)

# 스택으로 다시 풀기
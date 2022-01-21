import sys
import queue

# t = int(input())
# for i in range(t):
#     #문장 입력받기
#     case = sys.stdin.readline().split()
#     #단어마다 reverse 하기
#     for i in range(len(case)) :
#         case[i] = ''.join(reversed(case[i]))
#     #리스트 -> 문자열
#     result = " ".join(case)
#     print(result)
#

# 큐으로 다시 풀기

t = int(sys.stdin.readline())

for i in range(t):
    case = sys.stdin.readline().split()
    for i in range(len(case)):
        q= queue.Queue()
        print(q.qsize())

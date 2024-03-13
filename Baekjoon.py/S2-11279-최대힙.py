

import sys
from heapq import heapify, heappop, heappush

input = sys.stdin.readline
N = int(input())

q = []
for _ in range(N):
    x = int(input().rstrip())
    # 0이라면 최댓값 제거 후 출력
    if x == 0:
        if len(q) > 0:
            print(0 - heappop(q))
        else:
            print(0)
    # 자연수라면 넣기
    else:
        heappush(q,-x)

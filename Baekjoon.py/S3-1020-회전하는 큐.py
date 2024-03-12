import sys
from collections import deque

input = sys.stdin.readline
N,M = map(int, input().split())
list = list(map(int, input().split()))

queue = deque([i for i in range(1, N+1)])
idx, cnt = 0, 0
while idx < len(list):
    # 바로 pop 가능한 경우
    target = list[idx]
    if target == queue[0]:
        queue.popleft()
        idx += 1
        continue
    i = queue.index(target)
    l, r = i, len(queue)-i-1
    # 2번 연산
    if l <= r:
        for _ in range(l):
            queue.append(queue.popleft())
        cnt += l
    # 3번 연산
    else:
        for _ in range(r+1):
            queue.appendleft(queue.pop())
        cnt += r+1
    # 다음 타겟으로 이동
    queue.popleft()
    idx += 1
print(cnt)

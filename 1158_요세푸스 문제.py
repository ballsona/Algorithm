
import sys

n, m = map(int, sys.stdin.readline().split())
queue = list(range(1, n+1))
result = []

while len(queue) != 0:
    for _ in range(m - 1):
        queue.append(queue.pop(0))
    result.append(str(queue.pop(0)))
results = '<' + ', '.join(result) + '>'
print(results)

# 원형링크드리스트

#nameerror
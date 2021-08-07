import sys

n, m = map(int, sys.stdin.readline().split())
queue = []
result = []

for i in range(n):
    queue.append(i + 1)

while len(queue) != 0:
    for _ in range(m - 1):
        p = queue.pop(0)
        queue.append(p)
    result.append(str(queue.pop(0)))
results = '<' + ', '.join(result) + '>'
print(results)

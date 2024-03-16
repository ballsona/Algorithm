import sys
from heapq import heapify, heappop, heappush

input = sys.stdin.readline
N = int(input())

# 양수힙, 음수힙
plusHeap, minusHeap = [],[]
heapify(plusHeap)
heapify(minusHeap)
for _ in range(N):
    x = int(input())
    print(plusHeap, minusHeap)
    if x > 0: heappush(plusHeap,x)
    elif x < 0: heappush(minusHeap,x)
    else:
        if len(plusHeap) == 0 and len(minusHeap) == 0:
            print(0)
        elif len(plusHeap) == 0:
            print(heappop(minusHeap))
        elif len(minusHeap) == 0:
            print(heappop(plusHeap))
        else:
            if plusHeap[0] < -minusHeap[0]:
                print(heappop(plusHeap))
            else:
                print(heappop(minusHeap))


# 둘 다 뽑았는데 값 같으면 음수껄로 뽑고, 다르면 값이 더 작은 애로 뽑기.

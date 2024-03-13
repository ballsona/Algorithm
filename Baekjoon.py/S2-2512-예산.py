
import sys
input = sys.stdin.readline

# global N, List, X
n = int(input().rstrip())
nums = list(map(int, input().rstrip().split(" "))) # 각 지방의 예산 요청
x = int(input()) # 국가 예산

def solution(N, List, X):
    # 모든 요청 배정 가능한 경우
    if sum(List) <= X:
        return max(List)
    
    # 가능하지 않은 경우 -> 이분탐색 
    minV, maxV = 1, max(List)
    ans = 1
    while minV <= maxV:
        mid = (minV + maxV) // 2
        newList = list(map(lambda i: i if i <= mid else mid, List))
        if sum(newList) > X:
            maxV = mid - 1
        else:
            minV = mid + 1
            ans = mid
    return ans

print(solution(n, nums, x))

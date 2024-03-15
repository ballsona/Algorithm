# 배열에서 하나씩 뽑아서 곱한 값 최소로 만들기 
# 하나는 오름차순, 하나는 내림차순 정렬 후 순서대로 곱한 값!
def solution(A,B):
    A = sorted(A)
    B = sorted(B, reverse=True)
    ans = 0
    for i in range(len(A)):
        ans += A[i] * B[i]
    return ans
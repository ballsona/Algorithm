
# 나의 풀이
# N,k = map(int,input().split())

# count = 0

# while N != 1:  # N이 1이 되기 전까지
    # N이 k의 배수가 아니라면 빼기
#     if N % k != 0 :
#         N -= 1
     # N이 k의 배수라면 나누기
#     else : 
#         N //= k
#     count +=1
    
# print(count)

# 답안 참고

n,k = map(int,input().split())

count = 0

while True :
    # n을 k의 배수로 만들어주기 위한 수?
    target = (n//k)*k 
    count += n-target #count에는 나머지를 넣어준다 (어짜피 나머지 수 만큼 1씩 뺐을테니)
    n = target
    # n이 k의 배수가 되었을 때
    n //= k 
    count += 1
    # n이 k보다 작아서 더이상 나눌 수 없을때
    if n < 1 :
        break 

count += (n-1)
print(count)




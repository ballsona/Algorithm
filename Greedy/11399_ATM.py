N = int(input()) # 5

P = [3,1,4,3,2]

result = 0

#작은 순대로 정렬
P.sort() 
# 누적합을 계속 더해준다
for i in range(len(P)):
    for j in range(i+1):
     result += P[j]
    
print(result)
    
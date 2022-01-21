N = int(input())

# 00:00:00 ~ N:59:59 
count = 0

for h in range(N+1):
    for m in range(60) : 
        for s in range(60) :
            if '3' in str(h)+str(m)+str(s):
                count += 1

print(count)


# 문자열.find('x') : 문자열 안에서 x 위치 인덱스 
# if 'x' in 문자열 <- if 문자열.find('x') != -1
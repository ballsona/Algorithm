n,m,k = map(int,input().split())
test = list(map(int,input().split()))

test.sort()
first = test[n-1]
second = test[n-2]

sum = first * k + second
result = sum * (m//(k+1)) + first * (m%(k+1))

print(result)
n,m = map(int,input().split(' '))

min_arr = [] 

for _ in range(n):
    arr = list(map(int,input().split()))
    min_arr.append(min(arr))

min_arr.sort()
result = min_arr[n-1]
print(result)
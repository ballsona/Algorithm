N = int(input()) # 18

bag_types = [5,3]

result = 0

for bag in bag_types:
    result += N // bag
    N %= bag
if N != 0 :
    result = -1

print(result)
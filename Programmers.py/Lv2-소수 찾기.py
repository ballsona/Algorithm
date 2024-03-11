from itertools import permutations
import math

def solution(numbers):
    s = set()
    s.add(int(numbers))
    # 가능한 숫자 만들기
    for i in range(1, len(numbers)+1):
        pers = list(permutations(numbers, i))
        pers = set(list(map(lambda x:int("".join(x)), pers)))
        s = s.union(pers)
    # 소수 판별하기
    count = 0
    # print(list(s))
    for num in list(s):
        if num < 2: 
            continue
        if isPrime(num):
            count += 1
    return count

def isPrime(n):
    for i in range(2, int(math.sqrt(n)+1)):
        if n % i == 0:
            return False
    return True
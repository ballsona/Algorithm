import sys

sys.stdin = open("input.txt", "r")

d = {'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'A':10,'B':11,'C':12,'D':13,'E':14,'F':15}

# 16진수 -> 10진수 변환
def convertNum(s):  
    i, l = 0, len(s)
    res = 0
    while i < l:
        res += pow(16,i) * d[s[l-i-1]]
        i += 1
    return res

def solution(n,k,str):
    u = n // 4
    nums = set()
    
    # 회전하면서 배열에 저장
    for i in range(u):
        if i > 0:
            newStr = str[-1]
            newStr += str[0:-1]
            str = newStr
        for j in range(0,n,u):
            target = convertNum(str[j:j+u])
            nums.add(target)
    # list to set
    nums = sorted(list(nums), reverse=True)
    # k번째 값 반환
    return nums[k-1]     


T = int(input())

for test_case in range(1, T+1):
    # ///////////////////////////////////////////////////////////////////////////////////
    N,K = map(int, input().split()) # 문자열 길이와 K번째 
    Str = input()
    
    print("#"+str(test_case),solution(N,K,Str))
    # ///////////////////////////////////////////////////////////////////////////////////

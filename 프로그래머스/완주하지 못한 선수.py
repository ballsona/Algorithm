# https://programmers.co.kr/learn/courses/30/lessons/42576?language=python3


# 정확성은 모두 통과했지만, 효율성 테스트는 모두 통과하지 못했다. 
# 보기에는 코드가 간단하지만 for문 내에서 2개의 리스트를 돌기 때문에 시간이 오래걸리기 때문. -> 최악이면 O(n^2)?
def solution(participant, completion):
    for comp in completion:
        if comp in participant:
            participant.remove(comp)
    return participant[0]

# 문제 종류가 '해시'임을 참고해 코드를 다시 작성했더니 모든 테스트를 통과했다. 
# dictionary 가 list보다 시간 복잡도 측면에서 훨씬 빠르다. 
def solution2(participant, completion):
    dict = {}
    for p in participant:
        if p in dict.keys():
            dict[p] += 1
        else :
            dict[p] = 1
    for c in completion:
        if c in dict.keys():
            dict[c] -=1
    ans =''
    for k in dict.keys():
        if dict[k] == 1:
            ans = k
    return ans

# Counter 클래스를 사용하면 데이터 개수를 아주 간단하게 셀 수 있고, 카운터끼리 연산도 가능하다.
from collections import Counter

def solution(participant, completion):
    data = Counter(participant) - Counter(completion)
    return list(data)[0]

# 관련 
# https://github.com/ballsona/Algorithm_code/blob/master/Python/Hash.md
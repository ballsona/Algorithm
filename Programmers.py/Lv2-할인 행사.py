
from collections import Counter

def solution(want, number, discount):
    # 구매해야하는 아이템 정보
    wants = {want[i]: number[i] for i in range(len(want))}
    # 10일간 마트에서 살 수 있는 아이템 정보
    items = {d: 0 for d in discount}
    for i in range(10):
        items[discount[i]] += 1
    
    # 해당 기간 모두 살 수 있는 지 확인 후 업데이트
    count = 0
    s = sum(number)
    for j in range(len(discount)-s+1): # 0~4
        if wants == Counter(discount[j:j+s]):
            count+=1
        
    return count
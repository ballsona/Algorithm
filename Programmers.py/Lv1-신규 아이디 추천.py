
# https://programmers.co.kr/learn/courses/30/lessons/72410?language=python3

import re 

def solution(new_id):
    # 1단계
    new_id = new_id.lower()
    # 2단계
    new_id = re.sub(r'[^a-z0-9-_.]',"",new_id)
    # 3단계
    new_id = re.sub(r'[.]{2,}',".",new_id)
    # 4단계 
    new_id = new_id.strip('.')
    # 5단계
    if new_id == '':
        new_id ='a'
    # 6단계
    if len(new_id) >= 16:
        if new_id[14] == '.':
            new_id = new_id[0:14]
        else :
            new_id = new_id[0:15]
    # 7단계
    if len(new_id) <=2 :
        last = new_id[-1]
        while(len(new_id) < 3):
            new_id += last
    return new_id


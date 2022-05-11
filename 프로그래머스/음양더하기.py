# https://programmers.co.kr/learn/courses/30/lessons/76501?language=python3

def solution(absolutes, signs):
    answer = 0
    for i in range(len(signs)):
        if signs[i] == True:
            answer += absolutes[i]
        else:
            answer -= absolutes[i]
    return answer

def solution(absolutes, signs):
    answer = 0
    for absolute,sign in zip(absolutes,signs):
        answer += (absolute if sign else -absolute)
    return answer
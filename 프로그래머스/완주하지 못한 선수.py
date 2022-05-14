# https://programmers.co.kr/learn/courses/30/lessons/42576?language=python3

def solution(participant, completion):
    for comp in completion:
        if comp in participant:
            participant.remove(comp)
    return participant[0]
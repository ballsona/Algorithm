from collections import deque

def solution(n, wires):
    # 각 송전탑 연결되어있는 송전탑 그래프 생성
    towers = {i:[] for i in range (1, n+1)}
    for wire in wires:
        v1, v2 = wire
        towers[v1].append(v2)
        towers[v2].append(v1)
    print(towers)
    # 완전탐색으로 하나씩 끊어보면서 개수 비교하기
    min = 100000
    for wire in wires:
        v1, v2 = wire
        t1, t2 = 1,1 
        visited = [False]* (n+1)
        # v1 연결 개수
        q = deque([v1])
        visited[v1] = True
        while q:
            v = q.popleft()
            for t in towers[v]: 
                if not visited[t] and t != v2:
                    q.append(t)
                    visited[t] = True
                    t1 += 1
        # v2 연결 개수
        q.append(v2)
        visited = [False]* (n+1)
        visited[v2] = True
        while q:
            v = q.popleft()
            for t in towers[v]: 
                if not visited[t] and t != v1:
                    q.append(t)
                    visited[t] = True
                    t2 += 1
        # 개수 차이가 최소라면 
        diff = abs(t1 - t2)
        if min > diff: min = diff
    return min

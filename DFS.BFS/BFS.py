from collections import deque
from turtle import st

graph = [
    [],
    [2,3,8],
    [1,7],
    [4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]
visited = [False] * 9

def bfs(graph,start,visited) :
    queue = deque([start]) #[1]
    visited[start] = True
    while queue : #큐가 빌때까지 반복한다
        v = queue.popleft() #원소 하나 빼기
        print(v)
        for i in graph[v]:
            if not visited[i] :
                queue.append(i)
                visited[i] = True
                
bfs(graph,1,visited)
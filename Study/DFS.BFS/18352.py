#https://www.acmicpc.net/problem/18352

# 노드간 거리가 동일하고, 최단 거리를 구하는 문제임으로 BFS를 사용한다.
# 모든 노드에 방문한 후, 노드에 방문할때마다 인접한 경로를 모두 검사한다. -> 시간 복잡도 O(N+M)

from collections import deque
import sys

input = sys.stdin.readline

N,M,K,X = map(int,input().split())

# road[i]는 i번째 노드에서 갈 수 있는 노드 정보를 담고 있다. (road[0]은 항상 빈배열.) 
road=[[] for _ in range(N+1)]

for _ in range(M):
    A,B = map(int,input().split())
    road[A].append(B)

# 모든 노드의 최단거리를 -1로 초기화하되, 시작노드(X)는 0으로 초기화한다.
distance = [-1] * (N+1)
distance[X] = 0

# 시작 노드를 queue에 넣어준다.
queue = deque([X])

# queue가 빌때까지 BFS 수행.
while queue:
    now = queue.popleft()
    for next in road[now]:
        if distance[next] == -1 : #한번도 방문하지 않은 노드일때 
            distance[next] = distance[now]+1 #최단거리를 업데이트 해준다.
            queue.append(next)

answer = False
for i in range(1,N+1):
    if distance[i] == K:
        answer = True
        print(i)

if not answer :
    print(-1)
    

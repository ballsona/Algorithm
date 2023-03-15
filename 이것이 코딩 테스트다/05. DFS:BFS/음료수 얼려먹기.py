# input
N,M = map(int,input().split(' ')) # 열과 행 입력받기

graph = []
for i in range(N):
    graph.append(list(map(int,input())))

# function
def dfs(x,y):
    # 범위 벗어나는 경우 바로 종료
    if x <= -1 or x >= N or y <= -1 or y >= N :
        return False
    if graph[x][y] == 0 :
        # 0이라 방문했다면 그자리에 1 넣기.
        graph[x][y] = 1
        # 이 지점에서의 상,하,좌,우도 탐색하여 마찬가지로 0이라면 모두 1넣기.
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return True
    return False 

result = 0 
for x in range(N):
    for y in range(M):
        if dfs(x,y) == True:
            # dfs(0,0) 을 실행한다면.
            # (0,0) 지점에서 상하좌우 모두 탐색하여 방문처리 하기 때문에, (1,0),(0,1) 역시 1이 된다.
            # for문을 돌다가 dfs(1,0)을 실행했을 때 이미 그값은 0이 아니기 때문에 result가 카운팅되지 않는다.
            result +=1
print(result)


# 논리 연산자
# and.or 쓸 것... 파이썬에서는 &,|는 비트 논리 연산자임...

# DFS
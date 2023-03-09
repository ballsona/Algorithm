# https://www.acmicpc.net/problem/14502

# 총 설치할 수 있는 벽의 개수는 3개. 벽을 설치할 수 있는 모든 경우의 수를 구해본다.
# 이때 바이러스가 퍼질 수 있는 영역을 BFS/DFS 를 통해 구한다.

n,m = map(int,input().split())
data = []
temp = [[0]*m for _ in range(n)] # 값이 모두 0인 n*m 배열 

for _ in range(n):
    data.append(list(map(int,input().split()))) 
 
dx = [-1,0,1,0]
dy = [0,1,0,-1] #동북서남

# DFS를 이용해 바이러스가 사방으로 퍼지도록 한다. x,y는 바이러스의 좌표
def virus(x,y):
    for i in range(4):
        # nx,ny는 이동할 좌표 
        nx = x + dx[i]
        ny = y + dy[i]
        if nx >=0 and nx < n and ny >=0 and ny < m :
            if temp[nx][ny] == 0 : 
                temp[nx][ny] = 2
                virus(nx,ny)

# 안전영역 계산하기
def get_score():
    score = 0
    for i in range(n):
        for j in range(m):
            if temp[i][j] == 0:
                score +=1 

def dfs(count):
    global result
    # 울타리가 3개 설치된 경우
    if count == 3:
        for i in range(n):
            for j in range(m):
                temp[i][j] == data[i][j]
        # 바이러스가 있는 위치에서부터 전파 실행
        for i in range(n):
            for j in range(m):
                if temp[i][j] == 2:
                    virus(i,j)
        result = max(result,get_score())
        return 
    # 울타리 설치
    for i in range(n):
        for j in range(m):
            if data[i][j] == 0:
                data[i][j] = 1
                count += 1
                dfs(count)
                data[i][j] = 0
                count -= 1
dfs(0)
print(result)
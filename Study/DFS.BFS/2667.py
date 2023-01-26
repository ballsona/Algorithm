#https://www.acmicpc.net/problem/2667

# DFS -> 재귀 함수를 이용해 근접 노드들을 순차적으로 방문하여 결과적으로 모든 노드 방문.


from turtle import width


data = []
result = []

n = int(input())
for _ in range(n):
    data.append(list(map(int,input())))

visited = [[False] * n for _ in range(n)] #방문하지 않으면 0, 방문시 1
dx = [-1,0,1,0]
dy = [0,1,0,-1]

# dfs를 이용하여 단지 크기를 구한다.
def find_block(x,y):
    global width
    width+=1
    # 동서남북으로 한칸씩 이동하여 1인지 확인.
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx >= 0 and nx < n and ny >=0 and ny < n : 
            if not visited[nx][ny] and data[nx][ny] == 1:
                find_block(nx,ny)

# 
def main():
    for i in range(n):
        for j in range(n):
            #(i,j) 좌표가 1이고, 이 좌표를 아직 방문하지 않았다면 find_block 함수를 실행하여 단지의 크기를 구한다.
            if  data[i][j] == 1 and not visited[i][j]:
                find_block(i,j)
                if width > 0:
                    result.append(width)
                width = 0

result.sort()
print(len(result))
for r in result:
    print(r)
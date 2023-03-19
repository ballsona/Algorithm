# input
N,M = map(int,input().split(' '))

graph = []
for i in range(N):
    graph.append(list(map(int,input())))

dx = [-1,1,0,0]
dy = [0,0,-1,1]

#목적지 좌표는 N,M

def bfs(x,y) :
    while x < N and y < M :
        for i in range(4):
            nX = x + dx[i]
            nY = y + dy[i]
            if nX < 0 or nX >= N or nY <0 or nY >= M :
                return False
            if graph[nX][nY] != 0 :
                graph[nX][nY] += graph[x][y]+1
                x = nX
                y = nY

    
bfs(0,0)
print(graph)
n,m= map(int,input().split())

d= [[0]*m for _ in range(n)]
x,y,direction = map(int,input().split())
d[x][y]=1
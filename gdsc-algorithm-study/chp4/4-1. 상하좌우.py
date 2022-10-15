# input
N = int(input())
routes =input().split()

dirs = ['L','R','U','D']
dx = [0,0,-1,+1]
dy = [-1,+1,0,0]
loc = [1,1]

for route in routes :
    for i in range(len(dirs)) :
        if route == dirs[i]:
            newX = loc[0] + dx[i]
            newY = loc[1] + dy[i]
            if newX >0 & newX < N+1 & newY >0 & newY < N+1 :
                loc[0] = newX
                loc[1] = newY
print(loc[0],loc[1])

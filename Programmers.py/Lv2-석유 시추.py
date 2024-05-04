def solution(land):
    n, m = len(land), len(land[0])
    visited = [[False]*m for i in range(n)]
    widths = [0]*m

    # 영역 너비 + 정보 구하기
    def search(x,y):
        area = 0
        stack = [(x,y)]
        coords = []
        visited[x][y] = True
        
        while len(stack) > 0:
            (tx, ty) = stack.pop()
            coords.append(ty)
            area += 1
            if tx < n-1 and not visited[tx+1][ty] and land[tx+1][ty] == 1:
                stack.append((tx+1,ty))
                visited[tx+1][ty] = True
            if ty < m-1 and not visited[tx][ty+1] and land[tx][ty+1] == 1: 
                stack.append((tx,ty+1))
                visited[tx][ty+1] = True
        return (area, list(set(coords)))
     
    # 탐색 
    for i in range(n):
        for j in range(m):
            if land[i][j] == 1 and not visited[i][j]:
                a, l = search(i,j)
                for idx in l:
                    widths[idx] += a
                    
    # 석유량 최댓값
    return max(widths)
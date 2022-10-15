# input
cur = input()
x,y = int(ord(cur[0]) - ord('a') +1) , int(cur[1])

dirs = [(-2,-1),(-2,+1),(+2,-1),(+2,+1),(-1,+2),(+1,+2),(-1,-2),(+1,-2)] # len=8
count = 0 

for i in range(len(dirs)) :
    newX = x + dirs[i][0]
    newY = y + dirs[i][1]
    if newX > 0 & newX < 9 & newY > 0 & newY < 9 :
        count += 1
print(count)

# for dir in dirs : 
#     newX = x + dir[0]
#     newY = y + dir[1]
#     if ... :
#         count +=1



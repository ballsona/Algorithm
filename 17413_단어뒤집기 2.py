
# 스택으로 풀거임

data = list(input())
inTag = False
stack = []
tag = []
answer = []

for i in range(len(data)):
    if not inTag: #tag 밖
        if data[i] == "<":
            inTag= True
            tag.append(data[i])
            answer += reversed(stack)
            stack=[]
        elif data[i] != " ":
            stack.append(data[i])
        elif data[i] == " ":
            answer += reversed(stack)
            answer.append(" ")
            stack=[]
    elif inTag: #tag 안
        tag.append(data[i])
        if data[i]==">":
            inTag = False
            answer += tag
            tag=[]
answer += reversed(stack)
print("".join(answer))

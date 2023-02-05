array = [7,5,9,0,3,1,6,2,4,8]

def insert_sort(array):
    for i in range(1,len(array)):
        for j in range(i,0,-1) :
            if array[j] < array[j-1] :
                array[j],array[j-1] = array[j-1],array[j]
    return array

print(insert_sort(array))

# range(start,end,step)
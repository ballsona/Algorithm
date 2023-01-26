array = [7,5,9,0,3,1,6,2,4,8]

def select_sort(array):
    for i in range(len(array)):
        min_index = i
        for j in range(i,len(array)):
            if array[j] < array[min_index] :
                min_index = j
        array[i],array[min_index] = array[min_index], array[i]
    return array

print(select_sort(array))

# 시간 복잡도 O(N2)
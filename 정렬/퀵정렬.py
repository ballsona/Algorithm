array = [100,345,9,0,3,11,6,2,4,8]

def quick_sort(array,start,end):
    pivot = start #여기서는 7
    left = start + 1
    right = end
    while left <= right:
        if start == end :
            return False
        while left <= end and array[left] < array[pivot] : left += 1
        while right > start and array[right] > array[pivot] : right -=1
        if left < right :
            # 왼쪽에서부터는 pivot보다 큰 걸 찾고, 오른쪽에서부터는 작은 걸 찾는다. 찾으면 둘이 swap
            array[left], array[right] = array[right],array[left]
        else :
            #left,right 엊갈렸을 경우
            array[right], array[pivot] = array[pivot],array[right]
        quick_sort(array,start,right-1)
        quick_sort(array,right+1,end)


quick_sort(array,0,len(array)-1)
print(array)
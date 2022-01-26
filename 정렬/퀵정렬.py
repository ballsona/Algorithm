from turtle import left, right


array = [7,5,9,0,3,1,6,2,4,8]

# 방법1. 직관적이지만 구현이 복잡하고 연산이 비교적 오래걸림.
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
    return array

# print(quick_sort(array,0,len(array)-1))

#방법2. 파이썬 다운 코드
def quick_sort2(array):
    if len(array) <= 1: 
        return array
    pivot = array[0]
    tail = array[1:]
    left_side = [x for x in tail if x<pivot]
    right_side = [x for x in tail if x>pivot]
    return quick_sort2(left_side) + [pivot] + quick_sort2(right_side)

print(quick_sort2(array))
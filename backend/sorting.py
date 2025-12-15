# Resource used: https://www.w3schools.com/python/python_dsa_mergesort.asp
# Default is descending order (longest waiting first, reverse=True)
def mergeSort(petArray, reverse=True):
    if len(petArray) <= 1:
        return petArray
    
    mid = len(petArray) // 2
    leftHalf = petArray[:mid]
    rightHalf = petArray[mid:]

    leftSorted = mergeSort(leftHalf, reverse)
    rightSorted = mergeSort(rightHalf, reverse)

    return merge(leftSorted, rightSorted, reverse)

def merge(left, right, reverse):
    sortedPetArray = []
    leftIndex = 0
    rightIndex = 0

    while leftIndex < len(left) and rightIndex < len(right):
        if reverse:  # descending order (longest waiting first)
            if left[leftIndex]['daysWaiting'] > right[rightIndex]['daysWaiting']:
                sortedPetArray.append(left[leftIndex])
                leftIndex += 1
            else:
                sortedPetArray.append(right[rightIndex])
                rightIndex += 1
        else:  # ascending order (shortest waiting first)
            if left[leftIndex]['daysWaiting'] < right[rightIndex]['daysWaiting']:
                sortedPetArray.append(left[leftIndex])
                leftIndex += 1
            else:
                sortedPetArray.append(right[rightIndex])
                rightIndex += 1

    sortedPetArray.extend(left[leftIndex:])
    sortedPetArray.extend(right[rightIndex:])

    return sortedPetArray
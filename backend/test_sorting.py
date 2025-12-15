from backend.utils.sorting import mergeSort

def test_merge_sort_ascending(mock_pets):
    sortResult = mergeSort(mock_pets, reverse=False)
    days = [pet["daysWaiting"] for pet in sortResult]
    
    assert days == [1, 2, 366, 1001]

def test_merge_sort_descending(mock_pets):
    sortResult = mergeSort(mock_pets, reverse="True")
    days = [pet["daysWaiting"] for pet in sortResult]
    
    assert days == [1001, 366, 2, 1]


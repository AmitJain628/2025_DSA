/*
[3,4,5,1,2]

left = 0 / 3
right = 4 / 2
mid = 2 / 5 
*/

function findMinInSortedArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated, return the first element
    if (arr[left] < arr[right]) {
        return arr[left];
    }

    // Binary search to find the minimum in a rotated sorted array
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the mid element is greater than the right element
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left];
}
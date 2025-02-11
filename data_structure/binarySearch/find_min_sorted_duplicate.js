/*
[1,3,5]
[2,2,2,0,1]

*/
function findMinInSortedArrayDuplicatess(arr) { 
    let left = 0;
    let right = arr.length - 1;
    if (arr[left] < arr[right]) {
        return arr[left]
    }
    while(left < right) {
       let mid = Math.floor((left + right)/2);
       console.log("left", left, "right", right, "mid", mid, "mid val", arr[mid], "left val", arr[left], arr[right]);

       if (arr[mid] > arr[right]) {
          left = mid + 1;
       } else if (arr[mid] < arr[right]) {
         right = mid;
       } else {
         right--;
       }
    }

    return arr[left]
}

console.log(findMinInSortedArrayDuplicatess([3,3,1,3]))
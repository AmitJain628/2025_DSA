function search2D(arr, target) {
    let row = 0;
    let col = arr[0].length - 1;

    while(row >= 0 && row < arr.length && col >= 0 && col < arr[0].length) {
        if(arr[row][col] = target) {
            return [row, col];
        }
        if (arr[row][col] > target) {
            col--
        } else {
            row++;
        }
    }

    return [-1, -1];
}
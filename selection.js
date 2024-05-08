function selectionSort(arr) {
    // loop through the array starting from the first element
    for (let i = 0; i < arr.length; i++) {
        // set min to the index of the first element
        let min = i;
        // loop through the rest of the array
        for (let j = i + 1; j < arr.length; j++) {
            // if the current element is smaller than the minimum
            if (arr[j] < arr[min]) {
                // set min to the index of the current element
                min = j;
            }
        }
        // swap the minimum element with the first element
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

module.exports = selectionSort;

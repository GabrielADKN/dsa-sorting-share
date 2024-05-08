function insertionSort(arr) {
    // loop over the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // loop backwards through the sorted part of the array
        let j = i - 1;
        // store the current element
        let temp = arr[i];
        // check if the element is smaller than the previous element
        while (j >= 0 && temp < arr[j]) {
            // shift the previous element to the right
            arr[j + 1] = arr[j];
            // decrement j
            j--;
        }
        // insert the current element into the sorted part of the array
        arr[j + 1] = temp;
    }
    return arr;
}

module.exports = insertionSort;
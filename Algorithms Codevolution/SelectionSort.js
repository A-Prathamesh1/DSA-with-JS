function selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
                let minIndex = i;
                //find the minimum index
                for (let j = i + 1; j < arr.length; j++) {
                        if (arr[minIndex] > arr[j]) {
                                minIndex = j;
                        }
                }
                //swap
                if (minIndex !== i) {
                        let min = arr[minIndex];
                        arr[minIndex] = arr[i];
                        arr[i] = min;
                }
        }
        return arr;
}

let arr = [23, 25, 18, 14, 41, 54, 3, 2, 6, 3, 64, 6, 8, 2, 41, 6];
console.log(selectionSort(arr));
//BIg-O = O(n^2);

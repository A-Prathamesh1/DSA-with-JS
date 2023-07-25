//Bubble sort: tests the consecutive numbers till the end and keeps swapping if the later one is smaller than earlier one.

function bubbleSort(arr) {
        let swapped;
        do {
                swapped = false;
                for (let i = 0; i < arr.length; i++) {
                        if (arr[i] > arr[i + 1]) {
                                swapped = true;
                                let temp = arr[i + 1];
                                arr[i + 1] = arr[i];
                                arr[i] = temp;
                        }
                }
        } while (swapped);
}

let arr = [23, 25, 18, 14, 41, 54, 3, 2, 6, 3, 64, 6, 8, 2, 41, 6];
console.log(bubbleSort(arr), arr);

//Big-O = O(n^2);

//Insertion Sort

function insertionSort(arr, n = arr.length) {
        // console.log(arr, n);
        for (let i = 1; i < n; i++) {
                numberToInsert = arr[i];
                j = i - 1;
                while (j >= 0 && arr[j] > numberToInsert) {
                        arr[j + 1] = arr[j];
                        j--;
                }
                arr[j + 1] = numberToInsert;
        }
        return arr;
}

let arr = [20, 5, 15, 35, 10];
console.log(insertionSort(arr));
let arr1 = [1, 8, 2, 4, 5];
// console.log(insertionSort(arr1));
// Bog-O = O(n^2);

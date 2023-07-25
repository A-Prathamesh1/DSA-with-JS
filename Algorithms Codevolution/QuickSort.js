//Quick sort: Select a pivot element(last element of array), sort by placing element lesser than pivot on the left side of array and larger element on the right side of array

function QuickSort(arr) {
        if (arr.length < 2) {
                return arr;
        }
        let pivot = arr[arr.length - 1];
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > pivot) {
                        right.push(arr[i]);
                } else {
                        left.push(arr[i]);
                }
        }
        return [...QuickSort(left), pivot, ...QuickSort(right)];
}

let arr = [8, 20, -2, 4, -6];
let arr1 = [9, 8, 7, 1, 2, 3, 6];
console.log(QuickSort(arr1));

//Worst case: Big-O = O(n^2)
//Average case: BogO = O(nlogn);

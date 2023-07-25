function merge(leftArray, rightArray) {
        let sortedArray = [];
        while (leftArray.length && rightArray.length) {
                if (leftArray[0] <= rightArray[0]) {
                        sortedArray.push(leftArray.shift());
                } else {
                        sortedArray.push(rightArray.shift());
                }
        }
        return [...sortedArray, ...leftArray, ...rightArray];
}

function mergeSort(arr) {
        if (arr.length < 2) {
                return arr;
        }
        //let's find the mid

        let mid = Math.floor(arr.length / 2);
        let leftArray = arr.slice(0, mid);
        let rightArray = arr.slice(mid);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
}

let arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));

// Big-O = O(n Logn)

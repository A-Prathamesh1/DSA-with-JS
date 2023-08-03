/**
 * Binary search requires sorted array as input
 */
let myBinSearch = function (list, target) {
        // let pos = null; console.log("list [" + list +"]"); console.log("target " + target);
        let start = 0; //console.log("start " + start);

        let end = list.length - 1; //console.log("length " + list.length + " " + " end " + end);

        while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                //console.log("mid " + mid);
                if (list[mid] === target) {
                        console.log(target + ' found at ' + mid);
                        return true; //"found at " + mid;
                } else {
                        if (list[mid] < target) {
                                start = mid + 1;
                        }
                        // console.log("start " + start);
                        else {
                                end = mid - 1;
                        }
                }
                // console.log("end " + end);
        }
        return 'Item not in the list';
};
//console.log(myBinSearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 90));
//console.log('Time Complexity of binary search is Big-O = O(log n)');

//REcursive Binary Search

function recursiveBinarySearch(arr, start, end, target) {
        let mid = Math.floor((start + end) / 2);

        if (start > end) {
                return -1;
        }
        if (target === arr[mid]) {
                return mid;
        }
        if (target < arr[mid]) {
                return recursiveBinarySearch(arr, start, mid - 1, target);
        } else {
                return recursiveBinarySearch(arr, mid + 1, end, target);
        }
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 50));
//console.log('Time Complexity of recursive binary search is Big-O = O(log n)');

//How to empty an array in JavaScript?
//Method -1
let arr = [1, 2, 3];
arr.length = 0;
//console.log(arr);

//Method -2
let arr1 = [1, 2, 3];
arr1 = [];
// console.log(arr1);

//Method -3
let arr3 = [1, 2, 3];
arr3.splice(0, arr3.length);
// console.log(arr3);

//Method - 4
let arr4 = [1, 2, 3];
while (arr4.length) {
        arr4.pop();
}
console.log(arr4);

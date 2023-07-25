let arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

console.log(arr);

for (let item of arr) {
        //console.log(item);
}

//map, filter, reduce, concat, slice & splice
//map
let result = arr.map((item, index, array) => {
        return item * 2;
});
//console.log(result);

//Filter
let users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Pete' },
        { id: 3, name: 'Mary' },
];
let elements = users.filter((item, index, array) => {
        return item.id < 3;
});
// console.log(elements);

//Reduce: Used to reduce the array into a single value
let value = arr.reduce((acc, item, index, array) => {
        return acc + item;
}, 0);
// console.log(value);

//concat: joins two arrays and returns result
let arr1 = [1, 2, 3];
let res = arr.concat(arr1);
// console.log(res);

//Slice: Slices array from start to end, no including end
let res1 = [1, 2, 3, 4, 5].slice(1, 3);
// console.log(res1);

//if not second argument is mentioned it's assumed till end of the array
// console.log([1, 2, 3, 4, 5].slice(0));

//Splice: can be used to insert, delete, replace array elements
// arr.splice(start,[deleteCount, item n, item n + 1, item n + 2]);
let arr2 = [1, 2, 3, 4, 5];
console.log('splice ', arr2.splice(0, 2, 2.5, 2.6), 'arr2 ', arr2);

/*
insert/remove from end : O(1)
insert remove at the start: O(n), since other elements needs to be removed 
access O(1)
search O(n)
push O(1)
shift/unshift/concat/splice/slice: O(n)
forEach/map/filter/reduce: O(n)
*/

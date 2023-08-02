/**
 * For loop
 * for of loop
 * forEach loop
 * map
 * filter
 */

let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
// }

// for (let item of array) {
//         console.log(item);
// }

// array.forEach((element) => {
//         console.log(element);
// });

// array.map((element) => {
//         console.log(element);
// });

const evenNumbers = array.filter((number) => {
        return number % 2 === 0;
});
console.log(evenNumbers);

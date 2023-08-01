/**
 * write a function that would allow you to do
 * var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
 */

function createBase(baseNumber) {
        return function (n) {
                return n + baseNumber;
                //inner function has access to outer functions scope
        };
}
//create instance of function
let addSix = createBase(6);
//pass value 10 to the returned value after calling instance i.e, returned function
console.log(addSix(10));

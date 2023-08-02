function myFunc() {
        //private variable
        let count = 0;

        //lets create a function that gives access to private variable of myFunc

        return () => {
                return count;
        };
}
//let's access the private variable of myFunc directly
// console.log(count); // throws error that count is not defined

// now lets use the function that gives access to private variable of myFunc

let func = myFunc();
//myFunc returns the anonymous function and func calls that returned function.
console.log(func());

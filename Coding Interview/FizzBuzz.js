/**
 * Write a function that does the following:

console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz for numbers that are multiples of both 3 and 5.
E.g. fizzBuzz(5)
Result:

// 1
// 2
// fizz
// 4
// buzz
 */

function fizzBuzz(n) {
        for (let i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                        console.log('fizzBuzz');
                } else if (i % 3 === 0) {
                        console.log('fizz');
                } else if (i % 5 === 0) {
                        console.log('buzz');
                } else {
                        console.log(i);
                }
        }
}

//fizzBuzz(5);

function fizzBuzzy(n) {
        for (let i = 1; i <= n; i++) {
                let a = i % 3 === 0;
                let b = i % 5 === 0;

                a && b
                        ? console.log('fizzbuzz')
                        : a
                        ? console.log('fizz')
                        : b
                        ? console.log('buzz')
                        : console.log(i);
        }
}
console.log('fizzbuzzy:');
fizzBuzzy(5);

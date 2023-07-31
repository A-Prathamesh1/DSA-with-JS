/*
function myFactorialFunc(num) {
        if (num === 0 || num === 1) {
                return 1;
        } else {
                for (let i = num - 1; i >= 1; i--) {
                        num *= i;
                }
                return num;
        }
}
//console.log(myFactorialFunc(5));
*/

/*recursive solution
function fact(num) {
        let fact1 = 1;
        if (num === 0 || num === 1) {
                return 1;
        } else {
                return (fact1 = fact(num - 1) * num);
        }
}
//console.log(fact(5));
*/

function factorial(n) {
        let fact = 1;
        for (let i = 2; i <= n; i++) {
                fact = fact * i;
        }
        return fact;
}

//console.log(factorial(5));

function recFact(n) {
        if (n < 2) {
                return 1;
        }
        return n * recFact(n - 1);
}

console.log(recFact(5));

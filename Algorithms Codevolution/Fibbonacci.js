/*
Problem: Given a number n find the first 'n' elements of the fibbonacci sequence.
Every fibbonacci number is the sum of it's previous 2 numbers 
*/

function myFibGen(num) {
        const res = [0, 1];

        let a,
                b = 0;

        for (let i = 2; i < num; i++) {
                a = res[i - 1];
                b = res[i - 2];
                res.push(a + b);
        }

        return res;
}
//console.log(myFibGen(11));

//fibonacci number sequence
function fibbo(num) {
        let result = [0, 1];
        let [first, second] = result;
        for (let i = 2; i < num; i++) {
                first = result[i - 1];
                second = result[i - 2];
                result.push(first + second);
        }
        return result;
}

console.log('first 5 fibbo:', fibbo(5));

//REcursive Fibbonacci

function recFibo(n) {
        if (n < 2) {
                return n;
        }
        return recFibo(n - 1) + recFibo(n - 2);
}

//console.log(recFibo(5));

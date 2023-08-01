/**
 * REverse a number
 */

function reverseANumber(n) {
        let revnum = 0;
        while (n !== 0) {
                let lastDigit = n % 10;
                revnum = revnum * 10 + lastDigit;
                n = Math.floor(n / 10);
        }
        return revnum;
}
// console.log(reverseANumber(1234));

function reverseaNumber(n) {
        let strN = String(n);
        return strN.split('').reverse().join('');
}
console.log(reverseaNumber(1234));

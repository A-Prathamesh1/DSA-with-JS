//Pallindrome is a string which spells same from backwards
// e.g. dad, noon, level, madam

function PallindromeTester(str) {
        return str === str.split('').reverse().join('');
}

//console.log(PallindromeTester('madm'));
//Big-O = O(1)

//Following is the pallindrome tester without inbuilt functions
function pallindromeTester(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
                if (str[left] !== str[right]) return false;
                left++;
                right--;
        }
        return true;
}

console.log(pallindromeTester('1212'));
//Big-O = O(logn)

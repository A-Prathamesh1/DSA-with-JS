function myLinearSearch(list, target) {
        let pos = null;
        for (let i = 0; i < list.length; i++) {
                if (list[i] === target) {
                        console.log(list[i], target, pos);
                        pos = i;
                        console.log(target + ' found at ' + i);
                        return pos;
                }
        }
        console.log('nahi mila re baba');
        return 'Target not in the list';
}
//console.log(myLinearSearch([1, 'pqr', 3, 4, 'abc', 6, 7, 8, 9, 10], 'abc'));

// Time Complexity: Big-O = O(n), Space Complexity:
//O(1), since its taking only one memory space to store i.e., list[i]   .

function linearSearch(arr, target) {
        return arr.indexOf(target) !== -1 ? true : false;
}

console.log(linearSearch([1, 'pqr', 3, 4, 'abc', 6, 7, 8, 9, 10], '20'));

//Same time and space complexity. Space complexity of the code remains constant even if the input size increases. 

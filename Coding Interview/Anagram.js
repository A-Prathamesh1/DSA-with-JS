/**
 * An anagram is a word or phrase that is formed by rearranging the letters of another word or phrase, using all the original letters exactly once. In other words, two words are considered anagrams of each other if they have the same characters, but the order of those characters is different.
 */
function isAnagram(str1, str2) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();

        return (
                str1.split('').sort().join('') ===
                str2.split('').sort().join('')
        );
        console.log(str1, str2);
}

console.log(isAnagram('Abc', 'Pqr'));
console.log(isAnagram('listen', 'silent'));

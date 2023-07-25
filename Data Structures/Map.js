/* 
1. Map is unordered collection of key values pairs
both keys and values can be of any type.
2. For of loop can be used to iterate on them
*/
const map = new Map([
        ['a', 1],
        ['b', 2],
]);

map.set('c', 3);

map.delete('c');

console.log(map.get('b'));

console.log(map.size);

console.log(map.has('a'));

map.clear();

for (const [key, value] of map) {
        console.log(`${key}: ${value}`);
}

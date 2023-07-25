// A set holds the collection of values
// can hold mix data Types
// dynamically sized
// do not maintain
// set are iterable and for of loop can be used
// cant contain duplicate values
// searching and deleting is faster than arrays

const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));
set.delete(4);
console.log('size ', set.size);
set.clear();
for (const item of set) {
        console.log(item);
}

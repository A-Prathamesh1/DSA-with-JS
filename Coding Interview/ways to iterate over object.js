/**
 * For in
 * Object.values
 * Object.keys
 * Object.entries
 */

let user = { name: 'John', age: 32, occupation: 'dev' };

// for (let key in user) {
//         console.log(key, user[key]);
// }

// console.log(Object.keys(user));
let userKeys = Object.keys(user);

// for (let key of userKeys) {
//         console.log(key, user[key]);
// }

let values = Object.values(user);

// for (let value of values) {
//         console.log(value);
// }

let entries = Object.entries(user);

for (const [key, value] of entries) {
        console.log(key, value);
}

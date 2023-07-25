const obj = {
        name: 'Prat',
        age: 32,
        'is-funny': false,
        details: function () {
                console.log(`${this.name} is ${this.age} years old`);
        },
};
console.log(obj);
console.log(obj.age);

obj.job = 'dev';
console.log(obj);
console.log(obj['is-funny']);
console.log(obj.details());
console.log(
        'keys ',
        Object.keys(obj),
        'values ',
        Object.values(obj),
        'entries ',
        Object.entries(obj)
);

/*
insert,remove,access: O(1)
search: O(n)
Object.keys, Object.values, Object.entries: O(n)
*/

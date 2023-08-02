/**
 * How does this work in javascript?
 * this always refers to the owner of function
 */

let obj1 = { bar: 'obj1', foo: foo };
let obj2 = { bar: 'obj2' };

function foo() {
        console.log(this.bar);
}

var bar = 'global';

foo();

obj1.foo();

foo.call(obj2);

new foo();

var y = 1;
if (function f() {}) {
        y += typeof f;
}
// console.log(y);

/**
 * function f(){} is evaluated with eval and returns true
 */

var k = 1;
if (1) {
  function foo() {};
  k += typeof foo;
}
console.log(k); // output 1function

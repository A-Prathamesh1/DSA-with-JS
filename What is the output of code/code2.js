/**
 * (function() {
  var a = b = 5;
})();

console.log(b);
 */

(function () {
        var a = (b = 5);
})();

console.log(b);
//But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope

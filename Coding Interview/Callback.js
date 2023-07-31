function test(a, callback) {
        console.log(`value of a is ${a}`);
        callback(a);
}

test(10, (a) => {
        a = a * 10;
        console.log(`square of a is ${a}`);
});

/**
 * Given mul(2)(3)(4);
 * should return 24
 */

function mul(a) {
        return (b) => {
                return (c) => {
                        return a * b * c;
                };
        };
}

console.log(mul(2)(3)(4));

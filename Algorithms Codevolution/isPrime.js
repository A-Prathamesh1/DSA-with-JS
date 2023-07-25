function isPrime(n) {
        //for (let i = 2; i < n; i++) {
        // optimized for to check divisibility until sqrt(n), & no further checking is necessary.
        for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                        return false;
                }
        }
        return true;
}

console.log(isPrime(11));

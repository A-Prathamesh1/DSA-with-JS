const privateCounter = () => {
        let count = 0;

        return {
                increment: () => {
                        count++;
                        return count;
                },
                getCounter: () => {
                        return count;
                },
                reset: () => {
                        count = 0;
                },
        };
};
const counterInstance = privateCounter();
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log('count', counterInstance.getCounter());

// setTimeout(() => {
//         console.log('First Task');
//         setTimeout(() => {
//                 console.log('Second Task');
//                 setTimeout(() => {
//                         console.log('Third Task');
//                 }, 1000);
//         }, 1000);
// }, 1000);

//-------------------------------------->>>
/**
 * this is callback hell
 */

//solution
function delay(time) {
        return new Promise((resolve, reject) => {
                setTimeout(resolve, time);
        });
}

delay(1000)
        .then(() => {
                console.log('First task');
                return delay(1000);
        })
        .then(() => {
                console.log('Second task');
                return delay(1000);
        })
        .then(() => {
                console.log('Third task');
                return delay(1000);
        });

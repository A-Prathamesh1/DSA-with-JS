/**
 * A closure is a function defined inside another function lets say that is parent function, closures has access to its own variables and arguments as well as its parents variables and arguments and also the global variables.
 */
let globalVariable = 'Global';
(function outerFunction(outerArg) {
        let outerVariable = 'Outer';
        (function innerFunction(innerArg) {
                let innerVariable = 'Inner';
                console.log(
                        'Inner Variable:',
                        innerVariable,
                        '\n',
                        'Outer Variable:',
                        outerVariable,
                        '\n',
                        'Inner Argument:',
                        innerArg,
                        '\n',
                        'Outer Argument:',
                        outerArg,
                        '\n',
                        'Global Argument:',
                        globalVariable,
                        '\n'
                );
        })(20);
})(10);

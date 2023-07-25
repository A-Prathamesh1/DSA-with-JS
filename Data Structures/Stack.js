/*
* Stack is LIFO Last In First Out
Stack supports push and pop
Examples of stack ds:
1. Browser history tracking
2. Undo operation when typing
3. Expression conversion
4. javascript runtime
 */

class Stack {
        constructor() {
                this.items = [];
        }
        push(element) {
                this.items.push(element);
        }
        pop() {
                return this.items.pop();
        }
        peek() {
                return this.items[this.items.length - 1];
        }
        isEmpty() {
                return this.items.length === 0;
        }
        size() {
                return this.items.length;
        }
        print() {
                console.log(this.items.toString());
        }
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());
stack.print();
console.log(stack.pop());
console.log('peek', stack.peek());
stack.print();

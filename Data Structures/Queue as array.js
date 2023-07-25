/*
* FIFO: First in first out
Where Queue is used
1. Printers
2. CPU scheduling
3. Callback Queue Javascript runtime
*/

class Queue {
        constructor() {
                this.items = [];
        }
        enqueue(element) {
                this.items.push(element);
        }
        dequeue() {
                return this.items.shift();
        }
        isEmpty() {
                return this.items.length === 0;
        }
        peek() {
                if (this.items.length !== 0) {
                        return this.items[0];
                }
                return null;
        }
        size() {
                return this.items.length;
        }
        print() {
                console.log(this.items.toString());
        }
}

let queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());
queue.print();
queue.dequeue();
console.log(queue.peek());

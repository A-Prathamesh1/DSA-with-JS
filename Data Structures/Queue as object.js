class Queue {
        constructor() {
                this.items = {};
                this.front = 0;
                this.rear = 0;
        }
        enqueue(element) {
                this.items[this.rear] = element;
                this.rear++;
        }
        dequeue() {
                let item = this.items[this.front];
                delete this.items[this.front];
                this.front++;
                return item;
        }
        isEmpty() {
                return this.rear - this.front === 0;
        }
        peek() {
                return this.items[this.front];
        }
        size() {
                return this.rear - this.front;
        }
        print() {
                console.log(this.items);
        }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log('peek', queue.peek());
console.log('size', queue.size());
queue.print();
console.log(queue.dequeue());
queue.print();

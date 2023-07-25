/**
 * FIFO: First in first out
 * first element is connected to last element
 * Circular queue has fixed size
 *
 * where it is used
 * Clock, streaming data, traffic lights
 */
class CircularQueue {
        constructor(capacity) {
                this.items = new Array(capacity);
                this.capacity = capacity;
                this.currentLength = 0;
                this.rear = -1;
                this.front = -1;
        }
        isFull() {
                return this.currentLength === this.capacity;
        }
        isEmpty() {
                return this.currentLength === 0;
        }

        enqueue(element) {
                if (!this.isFull()) {
                        this.rear = (this.rear + 1) % this.capacity;
                        this.items[this.rear] = element;
                        this.currentLength += 1;
                        if (this.front === -1) {
                                this.front = this.rear;
                        }
                }
        }
        dequeue() {
                if (this.isEmpty()) {
                        return null;
                }
                const item = this.items[this.front];
                this.items[this.front] = null;
                this.front = (this.front + 1) % this.capacity;
                this.currentLength -= 1;
                if (this.isEmpty()) {
                        this.front = -1;
                        this.rear = -1;
                }
                return item;
        }
        peek() {
                if (!this.isEmpty()) {
                        return this.items[this.front];
                }
                return null;
        }
        print() {
                if (this.isEmpty()) {
                        console.log('Q is empty');
                } else {
                        let str = '';
                        let i;
                        for (
                                i = this.front;
                                i !== this.rear;
                                i = (i + 1) % this.capacity
                        ) {
                                str += this.items[i] + ' ';
                                // console.log(str);
                        }
                        str += this.items[i];
                        console.log(str);
                }
        }
}

const cq = new CircularQueue(5);
console.log(cq.isEmpty());
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);

console.log(cq.isFull());
cq.print();

console.log(cq.dequeue());
console.log('peek', cq.peek());
cq.print();
cq.enqueue(60);
cq.print();

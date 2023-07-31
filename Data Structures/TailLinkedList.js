class Node {
        constructor(value) {
                this.value = value;
                this.next = null;
        }
}

class LinkedList {
        constructor() {
                this.head = null;
                this.tail = null;
                this.size = 0;
        }
        isEmpty() {
                return this.size === 0;
        }
        getSize() {
                return this.size;
        }
        //O(1)
        prepend(value) {
                const node = new Node(value);
                //if list is empty
                if (this.isEmpty()) {
                        this.head = node;
                        this.tail = node;
                } else {
                        node.next = this.head;
                        this.head = node;
                }
                this.size++;
        }
        //O(1)
        append(value) {
                let node = new Node(value);
                //if list is empty
                if (this.isEmpty()) {
                        this.head = node;
                        this.tail = node;
                } else {
                        this.tail.next = node;
                        this.tail = node;
                }
                this.size++;
        }
        //O(1)
        removeFromFront() {
                //if list is empty
                if (this.isEmpty()) {
                        return 'List is empty';
                } else {
                        let value = this.head.value;
                        this.head = this.head.next;
                        this.size--;
                        return value;
                }
        }
        //O(n)
        removeFromEnd() {
                //if list is empty
                let value = this.tail.value;
                if (list.isEmpty()) {
                        return 'list is empty';
                } else {
                        let prev = this.head;
                        while (prev.next !== this.tail) {
                                prev = prev.next;
                        }
                        prev.next = null;
                        this.tail = prev;
                        this.size--;
                        return value;
                }
        }
        ////O(n)
        print() {
                if (this.isEmpty()) {
                        console.log('List is empty');
                        return;
                } else {
                        let cur = this.head; // current item in LL, pointing to list head
                        let nodeList = '';
                        while (cur) {
                                nodeList += `${cur.value} `;
                                cur = cur.next;
                        }
                        console.log(nodeList);
                }
        }
}

let list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.append(10);
list.append(20);
list.append(30);
list.prepend(9);
list.removeFromEnd();
list.removeFromFront();
list.print();
console.log(list.getSize());

/**
 * Linked List:Linear Data structure contains series of connected nodes
 * Each node points to the next node
 * insertion and deletion can be easily performed without reallocation or reorganization of entire structure
 * Random access is not possible so linear search is mandatory
 * all applications of stack and queue are applications of linked list
 */

class Node {
        constructor(value) {
                this.value = value;
                this.next = null;
        }
}

class LinkedList {
        constructor() {
                this.head = null;
                this.size = 0;
        }
        isEmpty() {
                return this.size === 0;
        }
        getSize() {
                return this.size;
        }
        prepend(value) {
                const node = new Node(value);
                if (this.isEmpty()) {
                        //if it's first insertion of the node
                        this.head = node;
                } else {
                        // if it's inserting after already inserted nodes
                        node.next = this.head;
                        this.head = node;
                }
                this.size++;
        }
        print() {
                if (this.isEmpty()) {
                        console.log('list is empty');
                } else {
                        let cur = this.head;
                        let listValues = '';
                        while (cur) {
                                listValues += `${cur.value}`;
                                cur = cur.next;
                        }
                }
        }
}

const list = new LinkedList();
console.log('is empty', list.isEmpty());

console.log('size', list.getSize());
list.print();

list.prepend(10);
list.print();

list.prepend(20);
list.prepend(30);
list.print();

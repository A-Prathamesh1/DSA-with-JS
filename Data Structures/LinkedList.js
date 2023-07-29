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
        insert(value, index) {
                //checking if the index is valid
                if (index < 0 || index > this.getSize()) {
                        console.log('Invalid index!');
                        return;
                }
                if (index == 0) {
                        //if index is first location that is 0
                        this.prepend(value);
                } else {
                        //if index is some middle location greater than 0
                        let node = new Node(value);
                        let prev = this.head;
                        for (let i = 0; i < index - 1; i++) {
                                prev = prev.next;
                        }
                        node.next = prev.next;
                        prev.next = node;
                        this.size++;
                }
        }
        remove(index) {
                //when its invalid index
                if (index == 0 || index >= this.size) {
                        console.log('Invalid index, cant remove!');
                }
                //when it's first and only node removal
                let removedNode;
                if (index === 0) {
                        removedNode = this.head;
                        this.head = this.head.next;
                } else {
                        //when index is valid and greater than 0
                        let prev = this.head;
                        for (let i = 0; i < index - 1; i++) {
                                prev = prev.next;
                        }
                        removedNode = prev.next;
                        prev.next = removedNode.next;
                }
                this.size--;
                return removedNode;
        }
        append(value) {
                let node = new Node(value);
                //1st appending into empty list
                if (this.isEmpty()) {
                        this.head = node;
                } else {
                        //2nd appending into a list with existing nodes
                        let prev = this.head;
                        while (prev.next) {
                                prev = prev.next;
                        }
                        prev.next = node;
                }
                this.size++;
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
        removeValue(value) {
                //If list is empty
                if (this.isEmpty()) {
                        return null;
                }
                //if head contains the value to be removed
                if (this.head.value === value) {
                        this.head = this.head.next;
                        this.size--;
                        return value;
                } else {
                        //node is not the first node in the LL
                        let prev = this.head;
                        //while there is still next node or while it's not the last node and value is not in the prev is not the value to be removed
                        while (prev.next && prev.next.value !== value) {
                                prev = prev.next;
                        }
                        //while it's not the last node in the list.
                        if (prev.next) {
                                let removeNode = prev.next;
                                prev.next = removeNode.next;
                                this.size--;
                                return value;
                        }
                        //when the given value is not in the node
                        return `Given ${value} is not available in the list`;
                }
        }
        search(value) {
                //If list is empty
                if (list.isEmpty()) {
                        console.log('list is empty');
                        return -1;
                } else {
                        let i = 0;
                        let cur = this.head;
                        while (cur) {
                                if (cur.value === value) {
                                        return `${value} is at ${i}`;
                                }
                                cur = cur.next;
                                i++;
                        }
                        return -1;
                }
        }
        reverse() {
                let prev = null;
                let cur = this.head;
                while (cur) {
                        let next = cur.next;
                        cur.next = prev;
                        prev = cur;
                        cur = next;
                }
                this.head = prev;
        }
        print() {
                if (this.isEmpty()) {
                        console.log('list is empty');
                } else {
                        let cur = this.head;
                        let listValues = '';
                        while (cur) {
                                listValues += `${cur.value} `;
                                cur = cur.next;
                        }
                        console.log('list:', listValues);
                }
        }
}

const list = new LinkedList();
console.log('is empty', list.isEmpty());

console.log('size', list.getSize());
list.print();

list.insert(10, 0);
list.print();
list.insert(20, 0);
list.print();
list.insert(30, 1);
list.print();
list.insert(40, 2);
list.print();
console.log(list.getSize());

console.log(list.removeValue(40));
list.print();
console.log(list.removeValue(20));
list.print();
console.log(list.removeValue(60));
list.print();
console.log(list.getSize());

console.log(list.search(20));
list.print();
list.insert(20);
list.insert(30);
list.insert(50);

list.print();
list.reverse();
list.print();

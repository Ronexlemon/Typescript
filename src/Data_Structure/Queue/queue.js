"use strict";
//queue FIFO
class Queue {
    constructor() {
        this.size = 0;
        this.items = [];
    }
    //enqueue
    enqueue(value) {
        this.items.push(value);
        this.size++;
    }
    //dequeue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Dequeue operation on an empty queue");
        }
        this.items.shift();
        this.size--;
    }
    //search
    contains(value) {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.includes(value);
    }
    //access first element
    peek() {
        return this.isEmpty() ? undefined : this.items[0];
    }
    //check empty
    isEmpty() {
        return this.size === 0;
    }
    //getsize
    getSize() {
        return this.size;
    }
}
const queue = new Queue();
console.log("The queue is Empty:", queue.isEmpty());
console.log("The Size of the queue is before enqueue:", queue.getSize());
queue.enqueue(1);
queue.enqueue(2);
console.log("Front of the queue:", queue.peek());
queue.enqueue(3);
console.log("The Size of the queue is after enqueue:", queue.getSize());
queue.dequeue();
console.log("The Size of the queue is after denqueue:", queue.getSize());
console.log("Front of the queue:", queue.peek());

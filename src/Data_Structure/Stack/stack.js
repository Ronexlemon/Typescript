"use strict";
class Stack {
    constructor() {
        this.size = 0;
        this.items = [];
    }
    push(value) {
        this.items.push(value);
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("stack undeflow:  cannot pop from an empty stack");
        }
        this.items.pop(); //pop the las element
        this.size--;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
    clear() {
        if (this.isEmpty()) {
            throw new Error("Stack Empty: Cannot clear an empty stack");
        }
        this.items = [];
        this.size = 0;
    }
    contains(value) {
        if (this.isEmpty()) {
            return false;
        }
        return this.items.includes(value);
    }
    toString() {
        return JSON.stringify(this.items);
    }
    clone() {
        return [...this.items];
    }
}
const stack = new Stack;
console.log("Stack empty?: ", stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Stack Contents: ", stack.toString());
console.log("get stack size:", stack.getSize());
stack.pop();
console.log("get stack size after pop:", stack.getSize());
console.log("stack contains:", stack.contains(2));
console.log("Stack empty?: ", stack.isEmpty());
console.log("Stack last element: ", stack.peek());

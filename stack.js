// 2. Implement a stack using an array.

class Stack {
    constructor() {
        this.items = [];
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack
    print() {
        console.log(this.items);
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack:");
stack.print(); // Output: [1, 2, 3]

console.log("Size:", stack.size()); // Output: 3
console.log("Top element:", stack.peek()); // Output: 3

console.log("Popped element:", stack.pop()); // Output: 3
console.log("Stack after pop:");
stack.print(); // Output: [1, 2]

// In this implementation:

// The Stack class represents a stack data structure.
// The push method adds an element to the top of the stack.
// The pop method removes and returns the top element of the stack.
// The peek method returns the top element of the stack without removing it.
// The isEmpty method checks if the stack is empty.
// The size method returns the number of elements in the stack.
// The print method prints the elements of the stack.
// Example Usage:

// We create a new instance of Stack.
// We push elements 1, 2, and 3 onto the stack.
// We print the stack to verify its contents.
// We get the size of the stack and the top element using size and peek.
// We pop an element from the stack and print the stack again.
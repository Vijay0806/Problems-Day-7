// 3. Implement a queue using a linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Add an element to the rear of the queue
    enqueue(data) {
        const newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Remove and return the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const data = this.front.data;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return data;
    }

    // Peek at the element from the front of the queue
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }

    // Print the queue
    print() {
        let current = this.front;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result);
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue:");
queue.print(); // Output: [1, 2, 3]

console.log("Size:", queue.getSize()); // Output: 3
console.log("Front element:", queue.peek()); // Output: 1

console.log("Dequeued element:", queue.dequeue()); // Output: 1
console.log("Queue after dequeue:");
queue.print(); // Output: [2, 3]






// In this implementation:

// The Node class represents a single node in the linked list, containing data and a reference to the next node.
// The Queue class represents the queue data structure using a linked list.
// The enqueue method adds an element to the rear of the queue.
// The dequeue method removes and returns the element from the front of the queue.
// The peek method returns the element from the front of the queue without removing it.
// The isEmpty method checks if the queue is empty.
// The getSize method returns the number of elements in the queue.
// The print method prints the elements of the queue.
// Example Usage:

// We create a new instance of Queue.
// We enqueue elements 1, 2, and 3 into the queue.
// We print the queue to verify its contents.
// We get the size of the queue and the front element using getSize and peek.
// We dequeue an element from the queue and print the queue again.
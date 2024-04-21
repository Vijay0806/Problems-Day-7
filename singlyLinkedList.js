// Session 7: Linked Lists, Stacks, Queues

// Topics: Linked lists, stacks, queues

// Problems:

// 1. Implement a singly linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a new node to the end of the linked list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Print the linked list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage
const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Linked List:");
linkedList.print();


// In this implementation:

// Node represents a single node in the linked list, containing data and a reference to the next node.
// SinglyLinkedList represents the linked list itself, with methods to append nodes and print the list.
// The append method adds a new node to the end of the linked list.
// The print method traverses the linked list and prints each node's data.
// Example Usage:

// We create a new instance of SinglyLinkedList.
// We append three nodes with data 1, 2, and 3.
// We print the linked list to verify its contents.
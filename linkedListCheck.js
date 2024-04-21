// 5. Write a function to check if a linked list contains a cycle.


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // If slow and fast pointers meet, it indicates a cycle
        if (slow === fast) {
            return true;
        }
    }

    // If fast reaches the end of the list, no cycle is found
    return false;
}

// Example usage
// Create a linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 5 -> 3 (points back to 3)
const headWithCycle = new Node(1);
headWithCycle.next = new Node(2);
headWithCycle.next.next = new Node(3);
headWithCycle.next.next.next = new Node(4);
headWithCycle.next.next.next.next = new Node(5);
headWithCycle.next.next.next.next.next = headWithCycle.next.next; // Create a cycle

console.log("Linked List with Cycle:", hasCycle(headWithCycle)); // Output: true

// Create a linked list without a cycle: 1 -> 2 -> 3 -> 4 -> 5
const headWithoutCycle = new Node(1);
headWithoutCycle.next = new Node(2);
headWithoutCycle.next.next = new Node(3);
headWithoutCycle.next.next.next = new Node(4);
headWithoutCycle.next.next.next.next = new Node(5);

console.log("Linked List without Cycle:", hasCycle(headWithoutCycle)); // Output: false


// This code defines a function hasCycle that takes the head of a singly linked list as input and returns true if the linked list contains a cycle, and false otherwise. It uses two pointers, slow and fast, to traverse the linked list. If there is a cycle, eventually the fast pointer will catch up to the slow pointer.

// Example Usage:

// We create two linked lists: one with a cycle and one without a cycle.
// We call the hasCycle function to check if each linked list contains a cycle.
// The function correctly identifies the presence or absence of a cycle in each linked list.
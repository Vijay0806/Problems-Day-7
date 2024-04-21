// 4. Write a function to reverse a linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next; // Save next node
        current.next = prev; // Reverse current node's pointer
        prev = current; // Move pointers one position ahead
        current = next;
    }

    // prev will point to the new head of the reversed list
    return prev;
}

// Example usage
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original Linked List:");
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

console.log("Reversed Linked List:");
printLinkedList(reversedHead); // Output: 5 -> 4 -> 3 -> 2 -> 1

// Function to print the linked list
function printLinkedList(head) {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" -> "));
}



// This code defines a function reverseLinkedList that takes the head of a singly linked list as input and returns the head of the reversed linked list. It uses three pointers (prev, current, and next) to reverse the pointers of the nodes in the list.

// Example Usage:

// We create a singly linked list with nodes containing data 1 through 5.
// We print the original linked list.
// We call the reverseLinkedList function to reverse the linked list.
// We print the reversed linked list.
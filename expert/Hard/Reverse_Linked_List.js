/**
 * Reverse Linked List
Write a function that takes in the head of a Singly Linked List, reverses the list in place (i.e., doesn't
create a brand new list), and returns its new head.
Each LinkedList node has an integer value as well as a next node pointing to the next
node in the list or to None / null if it's the tail of the list.
You can assume that the input Linked List will always have at least one node; in other words, the
head will never be None / null .
Sample Input
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 // the head node with value 0
Sample Output
5 -> 4 -> 3 -> 2 -> 1 -> 0 // the new head node with value 5
 */

class LinkedList {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
   }
   // O(n) time | O(1) space - where n is the number of nodes in the Linked Lis
   function reverseLinkedList(head) {
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    }
    return previousNode;
   }
   exports.LinkedList = LinkedList;
   exports.reverseLinkedList = reverseLinkedList;

//    Test the Program
// class TestLinkedList extends LinkedList {
//     addMany(values) {
//       let current = this;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       for (const value of values) {
//         current.next = new TestLinkedList(value);
//         current = current.next;
//       }
//       return this;
//     }
  
//     getNodesInArray() {
//       const nodes = [];
//       let current = this;
//       while (current !== null) {
//         nodes.push(current.value);
//         current = current.next;
//       }
//       return nodes;
//     }
//   }
//   const test = new TestLinkedList(0).addMany([1, 2, 3, 4, 5]);
//   const result = reverseLinkedList(test).getNodesInArray();
//   const expected = new TestLinkedList(5).addMany([4, 3, 2, 1, 0]).getNodesInArray();
//   console.log('Output::', result, expected);
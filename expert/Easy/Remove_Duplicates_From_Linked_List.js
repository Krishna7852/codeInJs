/**
 * Remove Duplicates From Linked List
You're given the head of a Singly Linked List whose nodes are in sorted order with respect
to their values. Write a function that returns a modified version of the Linked List that
doesn't contain any nodes with duplicate values. The Linked List should be modified in place
(i.e., you shouldn't create a brand new list), and the modified Linked List should still have its
nodes sorted with respect to their values.
Each LinkedList node has an integer value as well as a next node pointing to the
next node in the list or to None / null if it's the tail of the list.
Sample Input
LinkedList  = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with value 1
Sample Output
1 -> 3 -> 4 -> 5 -> 6 // the head node with value 1
 */

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// O(n) time | O(1) space - where n is the number of nodes in the Linked
function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextDistinctNode = currentNode.next;
    while (
      nextDistinctNode !== null &&
      nextDistinctNode.value === currentNode.value
    ) {
      nextDistinctNode = nextDistinctNode.next;
    }
    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  return linkedList;
}
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

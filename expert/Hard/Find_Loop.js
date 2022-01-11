/**
 * Find Loop
Write a function that takes in the head of a Singly Linked List that contains a loop (in
other words, the list's tail node points to some node in the list instead of None / null
). The function should return the node (the actual node--not just its value) from which the
loop originates in constant space.
Each LinkedList node has an integer value as well as a next node pointing to
the next node in the list.
Sample Input
head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 // the head node with value
                                    ^ v
                            9 <- 8 <- 7
Sample Output
4 -> 5 -> 6 // the node with value 4
        ^ v
9 <- 8 <- 7
 */
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// O(n) time | O(1) space
function findLoop(head) {
  let first = head.next;
  let second = head.next.next;
  while (first !== second) {
    first = first.next;
    second = second.next.next;
  }
  first = head;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return first;
}
exports.LinkedList = LinkedList;
exports.findLoop = findLoop;

//    Test the Program
class LinkedList extends LinkedList {
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNthNode(n) {
    let counter = 1;
    let current = this;
    while (counter < n) {
      current = current.next;
      counter++;
    }
    return current;
  }
}
const test = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
test.getNthNode(10).next = test.getNthNode(5);
console.log('FindLoop:', findLoop(test), test.getNthNode(5));

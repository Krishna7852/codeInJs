class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // TODO: Add Function for the reverse list
  // Add the item into the list.
  add(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(val);
  }
  // Check item is present in list or not.
  contains(target) {
    let current = this.head;
    while (current) {
      if (current.val === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  // Delete the item from list

  remove(target) {
    if (this.head && this.head.val === target) {
      this.head = null;
      return target;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.val === target) {
        prev.next = current.next;
        return target;
      }
      prev = current;
      current = current.next;
    }
  }
  // Dispplay added item in list . i.e k --> r -->
  print() {
    let str = '';
    let current = this.head;
    while (current) {
      str += current.val + ' --> ';
      current = current.next;
    }
    return str;
  }
}

const list = new LinkedList();
list.add('k');
list.add('r');
list.add('i');
console.log(list.contains('k'));
list.remove('r');
console.log(list.print());

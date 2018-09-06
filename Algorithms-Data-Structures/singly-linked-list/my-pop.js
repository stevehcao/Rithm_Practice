class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // popping pseudocode
  // if no nodes in list return undefined
  // loop through list until you reach tail
  // set the next property of 2nd to last node to be null
  // set the tail to be the 2nd to last node
  // decrement the length of list by 1
  // return value of the node removed
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next)
  }
}

var list = new SinglyLinkedList();
// list.push("HELLO")
// list.push("GOODBYE")

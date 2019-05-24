// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// Implement a Linked List Node class here
class Node {
  constructor(val) {
      this.value = val;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let node = new Node(val);
    // Empty linked list
    if (this.length === 0) {
      this.head = node;
      this.tail = node; 
    } else {
      this.tail.next = node; 
      this.tail = node; 
    }
    this.length++;
    return this;
  }

  removeTail() {
    let result;
    if (this.length === 0) return; 
    if (this.length === 1) {
      
    }
  }
}

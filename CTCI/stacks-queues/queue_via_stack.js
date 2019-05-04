// Implement a MyQueue class which implements a queue using two stacks

// Since stack and queue have different orders for removal, 
// (1) On enqueue, simply push the elements into the stack 1.
// (2) On dequeue, push all the elements from stack 1 into stack 2, which reverses the order of the elements. 
// Now pop from stack 2.
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        let el = this.stack1.pop();
        this.stack2.push(el);
      }
    }
    return this.stack2.pop();
  }
}

// Time complexity: O(n) to transfer n elements between stacks
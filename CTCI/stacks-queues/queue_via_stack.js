// Implement a MyQueue class which implements a queue using two stacks
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  // Push elements from stack1 to stack2, then pop from stack2
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
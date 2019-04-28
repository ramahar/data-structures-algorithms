// Three in One: Describe how you could use a single array to implement three stacks.

class ThreeInOne {
  constructor() {
    // Initialize 1 array and 3 stacks
    this.store = [];
    this.one = 0;
    this.two = 1;
    this.three = 2;
  }

  // Parameters: Stack to push to, value to push 
  push(stack, val) {
    this.store[this[stack]] = val;
    this[stack] += 3;
  }

  pop(stack) {
    this[stack] -= 3;

    if (this[stack] < 0) {
      this[stack] += 3;
      return null;
    }
    // Pop value, set value to null, return popped value 
    let result = this.store[this[stack]];
    this.store[this[stack]] = null;
    return result;
  }
}
// How would you design a stack which, in addition to push and pop, has a function 
// min which returns the minimum element? 
// Push, pop and min should all operate in 0(1) time.

// Keep track of min value while push, pop (To prevent extra time)
function MinStack() {
  this.store = [];
  this.min = [];
}

MinStack.prototype.push = function(val) {
  // let { store, min } = this;    [To use store instead of this.store]

  if (this.store.length) {
    // Push val to min array if it's less than last value in min stack
    if (val < this.min[this.min.length-1]) this.min.push(val);
  } else {
    // If empty stack, push val to min stack 
    this.min.push(val);
  }
  this.store.push(val);
}

MinStack.prototype.pop = function() {
  let el = this.store.pop();

  // Pop element from min stack as well 
  if (this.min[this.min.length-1] === el) this.min.pop();
  return el; 
}

// Minimum element will be the last element in min stack 
MinStack.prototype.min = function() {
  return this.min[this.min.length-1];
}

MinStack.prototype.isEmpty = function() {
  return this.store.isEmpty();
}

MinStack.prototype.peek = function() {
  return this.store[this.store.length-1];
}
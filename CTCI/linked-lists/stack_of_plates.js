/*
Stack of Plates: 
Imagine a(literal) stack of plates. If the stack gets too high, 
it might topple. Therefore, in real life, we would likely start 
a new stack when the previous stack exceeds some threshold.
Implement a data structure SetOfStacks that mimics this.SetOfStacks
should be composed of several stacks and should create a new stack 
once the previous one exceeds capacity.SetOfStacks.push() and 
SetOfStacks.pop() should behave identically to a single stack
(that is, pop() should return the same values as it would
if there were just a single stack).
FOLLOW UP: Implement a function popAt(int index) which performs a pop 
operation on a specific sub - stack.
*/

// Note: if stack not implemented as an array, would need to separately keep track of the depth 
// of each stack in an array

var setOfStacks = function(capacity) {
  this.capacity = capacity;
  this.stackSet = [];
};

setOfStacks.prototype.push = function(value) {
  if (this.stackSet.length === 0 || this.stackSet[this.stackSet.length-1].length === this.capacity) {
    // Create new stack and push value to new stack, if capacity reached 
    let newStack = [];
    newStack.push(value);
    // Push new stack to stack set
    this.stackSet.push(newStack);
  } else {
    // Push value to current stack if capacity not reached 
    this.stackSet[this.stackSet.length-1].push(value);
  }
}

setOfStacks.prototype.pop = function() {
  if (this.stackSet[this.stackSet.length-1].length === 0) {
    this.stackSet.pop();
  }
  return this.stackSet[this.stackSet.length-1].pop();
}

// Pop value from a specific sub-stack
setOfStacks.prototype.popAt = function(index) {
  return this.stackSet[index].pop();
}

setOfStacks.prototype.peek = function() {
  return this.stackSet[this.stackSet.length-1];
}

setOfStacks.prototype.isEmpty = function() {
  return this.stackSet.length === 0;
}
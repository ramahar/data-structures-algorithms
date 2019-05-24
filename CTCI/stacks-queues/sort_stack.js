/*
Sort Stack: 
Write a program to sort a stack such that the smallest 
items are on the top. You can use an additional temporary
stack, but you may not copy the elements into any other 
data structure(such as an array).The stack supports the 
following operations: push, pop, peek, and isEmpty.
*/

var sortStack = function(stack) {
    let stack2 = [];
    
    while (stack.length) {
      let temp = stack.pop();
  
      while (!stack2.length && stack2.peek() > temp) {
        stack.push(stack2.pop());
      }
      stack2.push(temp);
    }
  
    while (stack2.length) {
      stack.push(stack2.pop());
    }
}
// Palindrome: Implement a function to check if a linked list is a palindrome

// Initialize linked list node 
function LinkedListNode() {}

function palindrome(list) {
  return isEqual(list, reverse(list));

  // Function to check if two linked lists are equal
  function isEqual(one, two) {
    while (one && two) {
      if (one.val !== two.val) return false;

      one = one.next;
      two = two.next;
    }
    return one && two;
  }

  // Function to reverse a linked list
  function reverse(node) {
    let head = null;

    while (node) {
      let newNode = new LinkedListNode(node.val);
      newNode.next = head;
      head = newNode;
      node = node.next;
    }
    return head;
  }
}

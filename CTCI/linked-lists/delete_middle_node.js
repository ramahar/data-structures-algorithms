// Implement an algorithm to delete a node in the middle (i.e., any node 
//   but the first and last node, not necessarily the exact middle) of a 
//   singly linked list, given only access to that node

function deleteMiddle(node) {
  if (!node || !node.next) return;

  // Set node's value to next node's value 
  node.value = node.next.value;
  node.next = node.next.next;
}
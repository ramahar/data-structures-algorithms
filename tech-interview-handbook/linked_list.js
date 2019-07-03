// Reverse a linked list
function reverse(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev; 
}

// Given a linked list, determine if it has a cycle in it.
function hasCycle(head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) return true; 
    set.add(head);
    head = head.next;
  }
  return false; 
}

// Merge two sorted linked lists and return it as a new list. 
// The new list should be made by splicing together the nodes of the two lists.
function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  // Swap to make sure l1 is always less than l2
  if (l1.val > l2.val) [l1, l2] = [l2, l1];

  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
}
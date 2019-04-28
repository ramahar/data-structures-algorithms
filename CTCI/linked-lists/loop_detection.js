/*
Loop Detection: 
Given a circular linked list, implement an algorithm that 
returns the node at the beginning of the loop.
EXAMPLE
Input: A - > B - > C - > D - > E - > C Output: C
*/

function loopDetection(head) {
  // Store nodes in set and find start of loop in set 
  let set = new Set();

  while (head) {
    if (set.has(head.val)) return head;
    set.add(head.val);
    head = head.next;
  }
  return -1; 
}
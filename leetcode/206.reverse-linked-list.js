/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Iterative
// Iterate through linked list with three-pointers
// While iterating at each step reverse the current link’s direction.
var reverseList = function(head) {
  if (!head) return head; 
  let node = head;
  let newHead;
  let temp; 

  while (node) {
    // Save node.next before overwriting it
    temp = node.next;
    // Reverse pointer
    node.next = newHead;
    // Step forward in list 
    newHead = node; 
    node = temp; 
  }
  return newHead; 
};

// Recursive 
var reverseListRecursive = function(head) {
  // Base case
  if (!head || !head.next) return head; 
  
  let newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

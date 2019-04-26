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
var reverseList = function(head) {
    let newHead = null; 
    while (head) {
      let next = head.next;
      head.next = newHead;
      newHead = head;
      head = next;
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

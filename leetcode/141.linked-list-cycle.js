/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 *
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (36.17%)
 * Total Accepted:    389.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * Given a linked list, determine if it has a cycle in it.
 * 
 * To represent a cycle in the given linked list, we use an integer pos which
 * represents the position (0-indexed) in the linked list where tail connects
 * to. If pos is -1, then there is no cycle in the linked list.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * second node.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * first node.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Follow up:
 * 
 * Can you solve it using O(1) (i.e. constant) memory?
 * 
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Use set to store nodes that are visited. If set contains a node, means there is a cycle
    // Set methods: has -> Checks if element is contained in set, add -> Adds to set
    let nodes = new Set();
    while (head) {
      if (nodes.has(head)) return true;
      nodes.add(head);
      head = head.next;
    }
    return false;
};

// Solve using pointers (Faster!)
var hasCycleLoop = function(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    // Fast takes 2 steps at a time, slow goes one step 
    fast = fast.next.next;
    slow = slow.next;
    // If there is a loop, fast pointer will catch up with the slow pointer and be equal without skipping
    if (fast === slow) return true;
  }
  return false; 
}

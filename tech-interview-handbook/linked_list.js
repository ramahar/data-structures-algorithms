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

// Find the middle node of a linked list
function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = fast.next;
    fast = fast.next.next;
  }
  return slow;
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

// Remove nth node from the end of a linked list 
function removeNth(head, n) {
  let curr = head;
  let slow = head; fast = head;

  // Set 2nd pointer to be n ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // If pointer 2 doesn't exist, we need to remove head of the list
  if (!fast) return curr.next;

  // Move both pointers until fast reaches the end
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove nth node 
  slow.next = slow.next.next;
  return curr;
}

// Write a program to find the node at which the intersection of two singly linked lists begins.
function intersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let p1 = headA;
  let p2 = headB;

  while (p1 && p2 && p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next; 

    if (p1 === p2) return p1;
    if (!p1) p1 = headB;
    if (!p2) p2 = headA;
  }
  return p1;  // This returns null if there is no intersection 
}

// Check if linked list is palindrome
function isPalindrome(head) {
  let fast = head;
  let slow = head;

  // Iterate slow and fast pointers 
  while (fast) {
    if (fast.next) fast = fast.next.next;
    else fast = fast.next;
    
    slow = slow.next;
  }

  // Reverse the second half
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the two halves in sequence
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }
  return true;
}
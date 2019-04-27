// Remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

// Time and Space Complexity: O(n)
function removeDups(node) {
  if (!node) return node;
  let set = new Set();
  
  // Add current node's value to set, then check for duplicates in set  
  let curr = node;
  set.add(curr.value);

  while (curr.next) {
    // If set already has node, skip it. Else, add node to set
    if (set.has(curr.next.val)) {
      curr.next = curr.next.next;
    } else {
      set.add(curr.next.val);
      curr = curr.next;
    }
  }
}

// Without temporary buffer. Time: O(n^2)
function removeDups2(node) {
  if (!node || !node.next) return node;

  // Runner technique -> Iterate simultaneously with 2 pointers 
  let slow = node;
  let fast = node;

  while (slow.next) {
    while (fast.next) {
      // Skip node if fast and slow values match
      if (fast.next.val === slow.val) {
        fast.next = fast.next.next;
      } else {
        fast = fast.next;
      }
    }
    slow = slow.next;
    fast = slow;
  }
}
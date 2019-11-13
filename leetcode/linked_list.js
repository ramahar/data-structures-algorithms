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

function hasCycle(head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
}

function removeNth(head, n) {
  //? Move fast pointer n steps ahead of slow. Then remove nth node
  let slow = head, fast = head, curr = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) return curr.next;
  while (slow !== head) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return curr;
}

function middle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1.val > l2.val) [l1, l2] = [l2, l1];
  l1.next = merge(l1.next, l2);
  return l1;
}

function isPalindrome(head) {
  //? Reverse 2nd half of array, check if equal to first half
  if (!head || !head.next ) return true;
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = reverse(slow.next);
  slow = slow.next;
  while (slow) {
    if (slow.val !== head.val) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
}

function mergeKSortedLists(lists) {
  //? Use priority queue, merge lists 1-by-1 with helper, then push to original 
  if (lists.length === 0) return null;
  while (lists.length > 0) {
    let first = lists.shift();
    let second = lists.shift();
    let merged = merge(first, second);
    lists.push(merged);
  }
  return lists[0];

  function merge(l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    if (l1.val < l2.val) {
      l1.next = merge(l1.next, l2);
      return l1;
    } else {
      l2.next = merge(l1, l2.next);
      return l2;
    }
  }
}

// Sort linked list in O(n log n) time
function sort(head) {

}
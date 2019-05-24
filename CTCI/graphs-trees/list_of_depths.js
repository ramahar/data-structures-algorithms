/*
List of Depths: 
Given a binary tree, design an algorithm which creates a linked list 
of all the nodes at each depth(e.g., if you have a tree with depth D, 
you 'll have D linked lists).
*/

// Similar to level order traversal
function listOfDepths(root) {
  if (!root) return root;
  let queue = [root];
  
  while (queue.length) {
    let next = [];

    while (queue.length) {
      let el = queue.shift();

      if (el.left) next.push(el.left);
      if (el.right) next.push(el.right);
    }

    for (let i = 0; i < next.length - 1; i++){
      next[i].next = next[i + 1];
    }
    queue = next; 
  }
}
// Use BFS to search for a value in a tree (Given as an array of nodes)
function bfs(tree, value) {
  let queue = [];
  queue.push(tree[0]);

  while (queue.length !== 0) {
    let node = queue.shift();
    if (node.value === value) {
      return node;
    }
    if (node.left) {
      queue.push(tree[node.left]);
    }
    if (node.right) {
      queue.push(tree[node.right]);
    }
  }
  return null; 
}

// Implement BFS on a tree using level-order traversal
function levelOrder(root, nodes) {
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    nodes.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return nodes; 
}

// Implement DFS to search for a value in a tree (Given as an array of nodes)
function dfs(tree, value) {
  let stack = [];
  stack.push(tree[0]);

  while (stack.length !== 0) {
    let node = stack.pop();
    if (node.value === value) return node; 
    if (node.right) stack.push(tree[node.right]);
    if (node.left) stack.push(tree[node.left]);
  }
  return null;
}

// There are a total of n courses you have to take, labeled from 0 to n-1.
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
function canFinish(numCourses, prerequisites) {

}
console.log(canFinish(2, [[1,0]] ));

// https://leetcode.com/problems/course-schedule/discuss/146325/JavaScript-DFS
// https://github.com/jameshawkinsjr/lc-problems/blob/master/medium/207.js
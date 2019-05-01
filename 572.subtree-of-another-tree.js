/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 */
/**
 * 
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same 
 * structure and node values with a subtree of s. A subtree of s is a tree consists of 
 * a node in s and all of this node's descendants. The tree s could also be considered 
 * as a subtree of itself.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    
};

function quickSort(arr) {
  if(arr.length <= 1) return arr;

  var pivot = arr[0];
  var left = [];
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    // Elements greater than pivot move to right of pivot
    if ( arr[i] > pivot ) {
      right.push(arr[i]);
    // Elements less than pivot move to left 
    } else {
      left.push(arr[i]);
    }
  }
  // Concat left subarray with pivot and right subarray 
  return quickSort(left).concat(pivot, quickSort(right));
}
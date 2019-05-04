/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * 
 * [380] Insert Delete GetRandom O(1)
 */
/**
 * Design a data structure that supports all following operations in average O(1) time.
 * insert(val): Inserts an item val to the set if not already present.
 * remove(val): Removes an item val from the set if present.
 * getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
 */
var RandomizedSet = function() {
  this.nums = [];
  this.pos = {};  // Save indices of all values 
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  // Insert value if it doesn't exist in object 
  if (this.pos[val] === undefined) {
    this.nums.push(val);
    this.pos[val] = this.nums.length - 1; // Save the last index in the object 
    return true;
  } 
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // Value not found
    if (this.pos[val] === undefined) return false;

    // Get index of value of to be added, as well as last num
    let idx = this.pos[val];
    let lastNum = this.nums[this.nums.length-1];

    // Swap last number with val 
    this.nums[idx] = lastNum;
    this.pos[lastNum] = idx;

    // Delete val from nums array and object 
    this.nums.pop();
    delete this.pos[val];
    return true; 
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let idx = Math.floor(Math.random() * this.nums.length);
    return this.nums[idx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

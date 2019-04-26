/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */
/**
 * Initialize your data structure here.
 */
function Trie() {
  const root = {};
  this.insert = insert;
  this.search = search;
  this.startsWith = startsWith;

  function insert(word) {
      let curr = root;
      // Stores each character in object curr   
      // word.split('').forEach(char => curr = curr[char] = curr[char] || {});
      word.split('').forEach(char => {
        curr[char] = curr[char] || {};
        curr = curr[char];
      });
      curr.isWord = true;
  }
  
  function traverse(word) {
      let curr = root;
      for (var i = 0; i < word.length; i++) {
          if (!curr) return null;
          // Traverses through the trie, visiting each character 
          curr = curr[word[i]];
      }
      return curr;
  }
  
  function search(word) {
      let node = traverse(word);
      // Cast to boolean -> Return true if word found in trie 
      return !!node && !!node.isWord;
  }
  
  function startsWith(word) {
      return !!traverse(word);
  }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

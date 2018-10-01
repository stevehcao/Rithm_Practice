// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Example 1:
// Input:
// 	Tree 1                     Tree 2
//           1                         2
//          / \                       / \
//         3   2                     1   3
//        /                           \   \
//       5                             4   7
// Output:
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \
// 	 5   4   7
// Note: The merging process must start from the root nodes of both trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// to merge if two nodes overlap add their value
// if they do not use NOT null value as node
var mergeTrees = function(t1, t2) {
  // create a new tree? or just mutate one tree
  // breadth first search in order of levels of the tree
  // after that create a new tree according to what is avail
  if (t1 === undefined) {
    return;
  }

  let queue = [];
  queue.push(t1);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    for (let child of currentNode.left) {
      queue.push(child);
    }
  }
};

function mergeBinaryTrees(tree1, tree2) {
  // use recursion to do a DFS
  // base case
  if (tree1 === null) {
    return tree2;
  }
  if (tree2 === null) {
    return tree1;
  }

  tree1.val = tree1.val + tree2.val;
  tree1.left = mergeTrees(tree1.left, tree2.left);
  tree2.right = mergeTrees(tree1.right, tree2.right);

  return tree1;
}

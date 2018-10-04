/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// change what the next is pointing to if the current number is less than or equal to next num
// otherwise keep order
var mergeTwoLists = function(l1, l2) {
  // temp lists
  let prehead = new ListNode(-1);
  // previous node tracker
  let prevNode = prehead;
  // iterate through list 1
  while (l1 && l2) {
      if (l1.val <= l2.val) {
          // point to l1 and move node
          prevNode.next = l1
          l1 = l1.next;
      } else {
          prevNode.next = l2;
          l2 = l2.next;
      }
      prevNode = prevNode.next
  }
  // there will be one left over from l1 or 2 that is non=null
  // connect the non-null list to the end
  prevNode.next = l1 == null ? l2 : l1;
  
  return prehead.next;
};
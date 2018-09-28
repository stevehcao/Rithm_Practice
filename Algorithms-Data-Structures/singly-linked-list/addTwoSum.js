// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /* List1 ===> ListNode {
  val: 2,
  next: ListNode { val: 4, next: ListNode { val: 3, next: null } } } */

/*
list2 ===> ListNode {
  val: 5,
  next: ListNode { val: 6, next: ListNode { val: 4, next: null } } } 
*/

var addTwoNumbers = function(l1, l2) {
  let newList = new ListNode();
  // add values from both list
  // create a new linked list?
  // traverse through linked list 
    // if sum is double digits carry the first index over
  let calc = 5 + 5;
  return calc;
};

console.log(addTwoNumbers());

var addTwoNumbersMODEL1 = function(l1, l2) {
  // create l3 to return
  var l3 = new ListNode(0);
  var l3_head = l3;
  var carry = false;
  
  // traverse l1 and l2 till they are both null
  while (l1 || l2) {
      // add values while keeping track if it's null or not...
      var sum = 0;
      if (l1) sum += l1.val;
      if (l2) sum += l2.val;
      
      // if we are carrying from before, add one and set carry to false
      if (carry) {
          sum++;
          carry = false;
      }
      
      // keep track if you need to carry
      if (sum > 9) {
          sum -= 10;
          carry = true;
      }
      
      // add final value to next l3 val
      l3.next = new ListNode(sum);
      l3 = l3.next;
      if (l1) l1 = l1.next; 
      if (l2) l2 = l2.next;
  }
  // if there's one final carry left...
  if (carry) {
      l3.next = new ListNode(1);
      l3 = l3.next;
  }
  return l3_head.next;
};

function whatIwrote(l1, l2) {
  // console.log(l1.val + l2.val);
  let newList = new ListNode(0);
  let head = newList;
  let carry = false;
  
  while(l1 && l2) {
      // if l1 val is not null add to sum
      let sum = 0;
      if (l1 !== null) {
          sum += l1.val;
      }
      if (l2 !== null) {
          sum += l2.val;
      }
      if (carry) {
          sum++;
          carry = false;
      }
      if (sum > 9) {
          // change sum to only the single digit
          sum -= 10;
          carry = true;
      }
      newList.next = new ListNode(sum);
      newList = newList.next;
      
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
  }
  
  if (carry) {
      newList.next = new ListNode(1);
      newList = newList.next;
  }
  
  return head.next;
}
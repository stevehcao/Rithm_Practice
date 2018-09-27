// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // head.next --> {val: 2, next: null}
  // ListNode { val: 1, next: ListNode { val: 2, next: null } } node is just a table with pointers
  // tranverse it and push to array to rebuild string and check if palindrome
  let str = ''
  while (head !== null) {
      if (head.val !== null) {
        str += head.val;  
        // strArr.push(head.val);
        head = head.next;
      }
  }
  let strReverse = str.split('').reverse().join('');
  console.log(str);
  console.log(strReverse);
  if (str.length === 1) return true;
  if (str === str.split('').reverse().join('')) {
      return true;
  } else {
      return false;
  }
  // console.log(str);
};

// console.log(isPalindrome({ val: 1, next: { val: 2, next: null } }));
// console.log(isPalindrome({ val: 1, next: null }));
console.log(isPalindrome({ val: 1, next: { val: 2, next: null } }));

function isPalindromeMODEL(head) {
    // create two empty strings
    // iterate through linked list while head is true
      // build strings forward and backwards
      // move head to next
    // check if both strings are equal
    let foward = '';
    let reverse = '';

    while (head) {
      foward += head.val;
      reverse = head.val + reverse;
      head = head.next;
    }
    return foward === reverse;
}

function isPalindromeSTACK(head) {
  // stack
  // iterate through linked list
  // build stack
  // iterate trhough linked list
    // pop stack and check against traversing the linked list
  // tradeoff is that it takes more space
}



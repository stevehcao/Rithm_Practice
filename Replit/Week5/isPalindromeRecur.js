// Write a recursive function called isPalindrome which returns true if the string passed to 
// it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindromeNORMAL(str) {
  // split reverse and join then compare against original
  let reverseStr = str.split('').reverse().join('');
  return reverseStr === str ? true : false;
}
// console.log(isPalindromeNORMAL('tacocat'));
// console.log(isPalindromeNORMAL('foobar'));

function isPalindrome(str) {

}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
//isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, cb) {
  // base case
  if (arr.length === 0) return false;
  // take first element and pass it in to call back
  firstEl = arr.shift();
  if (cb(firstEl)) {
    return true;
  } else {
    return someRecursive(arr, cb);
  }
  // recurse with slightly smaller array
}

// console.log (someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// someRecursive([4,6,8], isOdd) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

// BONUS

// Write a  recursive function called reverse which accepts a string and returns 
// a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
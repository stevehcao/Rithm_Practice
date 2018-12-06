/** method for string compression
 * using counts of repeated characters.  For example, aabcccccaaa -> a2b1c5a3
 * if the "compressed" string would not become smaller than the original string, method should return original string
 * assume that string has only upper case and lowercase letters (a-z)
 *
 *
 *  would you count upper case as a different letter? aaAAA -> a5? or a2A3?
 *
 */
// take a string and "compress" string to just the first identifying char and # of times it is present before a new char starts
// if the compress string is not shorter than the original return original

/**
 *
 * @param {String} str
 * run time is O(n^2) because of string concats on each iterations
 * try a string builder?
 */
function compress(str) {
  const lowercaseStr = str.toLowerCase();
  let newStr = str[0];
  let currIdx = 0;

  for (let i = 0; i < lowercaseStr.length; i++) {
    if (lowercaseStr[i] !== newStr[newStr.length - 1]) {
      newStr += i - currIdx;
      newStr += lowercaseStr[i];
      currIdx = i;
    }
    if (i === lowercaseStr.length - 1) {
      newStr += i - currIdx + 1;
    }
  }
  return newStr.length < str.length ? newStr : str;
}

console.log(compress('aabcccccaaa')); // a2b1c5a3

function compressStringBuilder(str) {
  const lowercaseStr = str.toLowerCase();
  let newStr = [str[0]];
  let currIdx = 0;

  for (let i = 0; i < lowercaseStr.length; i++) {
    if (lowercaseStr[i] !== newStr[newStr.length - 1]) {
      newStr.push(i - currIdx);
      newStr.push(lowercaseStr[i]);
      currIdx = i;
    }
    if (i === lowercaseStr.length - 1) {
      newStr.push(i - currIdx + 1);
    }
  }
  return newStr.length < str.length ? newStr.join('') : str;
}

console.log(compressStringBuilder('aabcccccaaa')); // a2b1c5a3

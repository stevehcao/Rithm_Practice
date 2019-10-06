/**
 * take in a string and a number
 * repeat the string until it equals the length of the number
 * count how many 'a' are in the string
 * return the number of a's
 *
 * @param {String} str
 * @param {Number} num
 */
// things to think about - what if the string length is more than the given number
// will caps matter?
// what happens if string length is greater than the given number
// this function does not work for overly long strings
function repeatedString(str, num) {
  // edge case for if str is longer than num
  if (str.length > num) {
    const subStr = str.substring(0, num);
    // filter for only a's and return length
    const aArr = subStr.split('').filter(char => char === 'a');
    return aArr.length;
  }
  // edge case for if only a
  if (str === 'a') return num;
  // number of time 'a' appears
  let count = 0;
  let temp = str;
  // build the repeated string
  // how many times should you loop to build string
  let multiple = Math.ceil(num / str.length);
  for (let i = 0; i < multiple; i++) {
    str = str + temp;
  }
  const newStr = str.slice(0, num);
  // count how many 'a' are in the string
  for (let char of newStr) {
    if (char === 'a') count++;
  }
  return count;
}

// console.log(repeatedString('aba', 10));
// console.log(repeatedString('ababcaaaeoiwwe', 4));
console.log(
  repeatedString(
    'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
    736778906400
  )
);

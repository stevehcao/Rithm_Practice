// a string containing every third letter from the original string.
// E.g. if you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.]

/**
 * accepts a string and returns a smaller string
 * returns a string with every third letter
 * how to handle empty string or string with less than 3 char
 * string are primitives so you can just build new string rather than in place
 */
let testString = 'iamyourlyftdriver';
let testEmptyString = '';
function thirdChar(str) {
  // new string
  // iterate through string and build only 3rd char
  // return new string
  let newStr = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (count === 3) {
      newStr = newStr.concat(str[i]);
      count = 1;
    } else {
      count++;
    }
  }
  return newStr;
}

console.log(thirdChar(testString));
console.log(thirdChar(testEmptyString));
console.log(thirdChar('le'));

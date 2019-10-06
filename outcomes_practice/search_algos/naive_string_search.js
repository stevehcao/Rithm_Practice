/**
 * loop over the longer string
 *   loop over the shorter string
 * if the characters don't match, break out of the inner loop
 * if the characters do match, keep going
 * if you complete the inner loop and find a match, increment the count of matches
 * return count
 */

// want to count how many times str2 is in str1
function stringSearchNaive(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      // str1[i + j] to look ahead of the string
      if (str1[i + j] !== str2[j]) {
        console.log('NO MATCH BREAK!');
        break;
      }
      // to see if you get to the end of the short string
      if (j === str2.length - 1) {
        console.log('found one!');
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearchNaive('walkinghello', 'king')); // 1
console.log(stringSearchNaive('walkinghellokingking', 'king')); // 3
console.log(stringSearchNaive('hello', 'elk')); // 0

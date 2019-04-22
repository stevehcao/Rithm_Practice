/**
 * loop over the longer string
 *   loop over the shorter string
 * if the characters don't match, break out of the inner loop
 * if the characters do match, keep going
 * if you complete the inner loop and find a match, increment the count of matches
 * return count
 */

// want to count how many times str2 is in str1
function stringSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] !== str2[j]) {
        break;
      }
      count++;
    }
  }
  return count;
}

console.log(stringSearch('walkinghello', 'king'));

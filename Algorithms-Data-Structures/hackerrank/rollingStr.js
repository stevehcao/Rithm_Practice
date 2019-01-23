// Roll the characters of string
// Given a string s and an array roll where roll[i] represents rolling first roll[i] characters in string. We need to apply every roll[i] on string and output final string. Rolling means increasing ASCII value of character, like rolling ‘z’ would result in ‘a’, rolling ‘b’ would result in ‘c’, etc.
// constraints:
// 1 <= |s| <= 10^5
// 1 <= roll[i] <= 10^5
// Examples:
// Input : s = "bca"
//         roll[] = {1, 2, 3}
// Output : eeb
// Explanation :
// arr[0] = 1 means roll first character of string -> cca
// arr[1] = 2 means roll first two characters of string -> dda
// arr[2] = 3 means roll first three characters of string -> eeb
// So final ans is "eeb"

// Input : s = "zcza"
//         roll[] = [1, 1, 3, 4]
// Output : debb

/**
 * rolling means increasing the ASCII value of a character 'z' -> 'a', 'b' -> 'c'
 * @param {String} str
 */
function rollStr(str, rolls) {
  // ASCII
  // need to account for z
  // results
  let results = str;
  // iterate rolls
  for (let i = 0; i < rolls.length; i++) {
    let numRolls = rolls[i];
    results = singleRoll(results, numRolls);
  }
  // each element is the number of character that are rolled
  // have to create new string from what is rolled
  return results;
}

function singleRoll(str, roll) {
  // roll corresponds to how much to slice
  // return a new string
  // limit to how many elements are rolled
  let notRolled = str.slice(roll);
  let strArr = str.split('').slice(0, roll);
  for (let i = 0; i < strArr.length; i++) {
    let char = strArr[i];
    // moving ASCII count up one
    char = char.charCodeAt(0) + 1;
    if (char === 123) {
      char = 'a';
    } else {
      char = String.fromCharCode(char);
    }
    strArr[i] = char;
  }
  return strArr.join('') + notRolled;
}

// console.log(rollStr('a'));
// console.log(rollStr('b'));
// console.log(singleRoll('bca', 3));
console.log(rollStr('bca', [1, 2, 3]));

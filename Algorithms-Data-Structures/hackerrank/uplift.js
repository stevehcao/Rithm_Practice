/*
 * Complete the 'rollTheString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY roll
 */

// all lower case
// naive approach nested for loop
// input strings might be long however
// returns a string
// s = "abz", roll = [3,2,2]
function rollTheString(s, roll) {
  // create an array to tell us how many times to roll the char
  let charArr = roll.reduce((acc, next) => {
    for (let i = 0; i < next; i++) {
      acc[i] ? acc[i]++ : (acc[i] = 1);
    }
    return acc;
  }, Array(s.length).fill(0)); // will be an array of how many times to roll at each index [3,3,1] if roll = [3,2,2]
  // turn string into arr
  let strArr = s.split('');

  // iterate through strArr and roll char by each charArr element
  let newStrArr = strArr.map((el, idx) => {
    return rollChar(el, charArr[idx]);
  });

  return newStrArr.join('');
}

// helper function to roll single char takes char and number of time to roll
function rollChar(char, num) {
  // get charCode of char
  // subtract 97 then add num
  // modulo 26 + 97, this should get you the charCode after the rolls
  // convert back to char

  let charCode = char.charCodeAt();
  charCode = charCode - 97 + num;
  charCode = (charCode % 26) + 97;
  return String.fromCharCode(charCode);
}

function rollNow(s, roll) {
  // build charArr differently
  // is keeping track only once of where the rolls end
  // e.g. roll = [3,2,2] charArr = [0,0,2,1] because index 3 is where 3 ends and add 1 there, same with 2
  let charArr = roll.reduce((acc, next) => {
    acc[next]++;
    return acc;
  }, Array(s.length + 1).fill(0));
  console.log(charArr, 'ROLLING ARRAY');

  let rollLeng = roll.length;
  let strArr = s.split('');

  let newStrArr = strArr.map((el, idx) => {
    // use roll length with adjusted numbers
    rollLeng -= charArr[idx];
    return rollChar(el, rollLeng);
  });
  return newStrArr.join('');
}

console.log(rollNow('abz', [3, 2, 2])); // [0, 0, 2, 1]; 'dea'
console.log(rollNow('abzc', [2, 1, 3, 4])); // [0, 1, 1, 1, 1] 'eebd'

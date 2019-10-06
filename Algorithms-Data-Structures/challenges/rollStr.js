/**
 * given a string s and an array called roll, and each element represents how many char in the string to roll
 * each roll mean increasing the ASCII value of the char by 1 a-> b, b->c
 * except for z -> a
 * assume string is lower case
 *
 * input: string, array
 * output: string
 *
 *
 */

// use String.charCodeAt(num) and String.fromCharCode(num)

// str = 'abcd'
// arr = [1,2,3]
function rollStr(str, arr) {
  // iterate through string
  // iterate through arr of rolls as well?
  for (let i = 0; i < arr.length; i++) {
    // build out
    let newStr = str.slice(0, arr[i]);
    let rest = str.slice(arr[i]);
  }
}

function rollStrArr(str, numArr) {
  // turn str to array
  let strArr = str.split(''); // [a, b, c, d]
  for (let num of numArr) {
    // [1,2,3]
    for (let i = 0; i < num; i++) {
      // this is where you roll each char
      strArr[i] = rollCharOnce(strArr[i]);
    }
  }

  return strArr.join('');
}

// helper function to roll one char
// return a string
// add how many times to roll
function rollCharOnce(str) {
  // increase str ASCII value by one
  // unless it's z then just return a
  // return new string
  let charVal = str.charCodeAt(0);
  if (str === 'z') {
    return 'a';
  } else {
    charVal++;
  }

  return String.fromCharCode(charVal);
}

// console.log(rollCharOnce('a'));
// console.log(rollCharOnce('z'));

console.log(rollStrArr('abcz', [2, 1, 4])); // ddda

function optimizedRollStr(str, roll) {
  // need to be optimized
  // create array and store total roll operation to be performed on each char in it
  let numRolls = [];
  // traverse string and perform roll operation
  let eachCharRollArr = Array.from(new Array(str.length)).fill(str.length);
  for (let i = 0; i < roll.length; i++) {
    // build numRolls out
    if (roll[i] >= eachCharRollArr.length) {
      continue;
    } else {
      --eachCharRollArr[roll[i]]; //
    }
  }
}

function rollCharMany(str, rollAmt) {
  // increase str ASCII value by one
  // unless it's z then just return a
  // return new string
  let charVal = str.charCodeAt(0);
  if (str === 'z') {
    charVal = 97; // 97 === 'a'
    charVal += rollAmt - 1;
  } else {
    charVal += rollAmt;
  }

  return String.fromCharCode(charVal);
}

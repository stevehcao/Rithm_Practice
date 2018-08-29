// Description
// Write a function called addCommas, which takes in a number and
// returns a string which formats that number so that it has commas
// after every third digit to the left of the decimal point (i.e. normal US comma formatting).

// You can assume that all numbers are non-negative.
// input: numbers
// output: string

// Examples

function addCommas(num) {
  // turn number to string
  // split on the . if there is one
  // array of string should be either left or right val of arry
  let str = num.toString();
  let strSplit = str.split('.');
  let rightStr = strSplit[0].split('');

  let i = rightStr.length - 1;
  let count = 0;
  let newStr = '';
  // console.log(strSplit[0].split(''));
  // console.log(strSplit);

  // use a while loop to rebuild strSplit[0] every 3rd number add a string
  // start from the last idx
  while (i >= 0) {
    if (count !== 3) {
      newStr += rightStr[i];
      count++;
      i--;
    } else {
      count = 0;
      newStr += ',' + rightStr[i];
      i--;
    }
  }
}
// input: number
// output: string
// it should take in a number and return a formatted string
// the stirng should take that number and add a comma to every third digit to the left
// of the decimal point
// assume: that all numbers are non-negative

// turn number to string and split into array and some how join at every 3rd?
// don't really need array
// string includes method
// refactored!!!!

function addCommas1(num) {
  // turn num to string
  let numStr = num.toString();
  // use split to make it easier to work with
  let numArr = numStr.split('.');
  console.log(numArr);
  // new empty string to rebuild
  let newStr = '';
  // use a counter to know where to add comma
  let counter = 0;
  let loop = numArr[0].length - 1;
  //console.log(loop, "length");

  // iterate through string BACKWARDS
  while (loop >= 0) {
    // based one where the counter is either build string
    // or add comma
    // add logic for when string has a "."
    if (counter === 3) {
      // '123'
      newStr = numStr[loop] + ',' + newStr;
      counter = 1;
      loop--;
    } else {
      newStr = numStr[loop] + newStr;
      counter++;
      loop--;
      //console.log(loop, 'loop');
      //console.log(counter, 'counter');
    }
  }
  if (numArr[1]) {
    newStr = newStr + '.' + numArr[1];
  }
  return newStr;
}
// addCommas(1); // "1"

// console.log(addCommas(1000)); // "1,000"

// addCommas(123456789); // "123,456,789"

// addCommas(3.141592); // "3.141592"

// addCommas(54321.99); // "54,321.99"

// model solution
/**
 * For numbers less than 3 non-decimal digits, just return the
 *  string version of the number.
 *
 * For larger numbers, first get rid of the right-hand side by
 *  splitting the string on the decimal point.
 *
 * Then loop backwards through the number left of the decimal point,
 *  inserting a comma at every 3rd position.
 *
 *  Finally, put the decimal back in if applicable.
 */
function modelAddCommas(num) {
  const strNum = num.toString();
  // if the stringified number is less than three digits on its own or with a decimal
  if (strNum.length <= 3 || (strNum.includes('.') && strNum.indexOf('.') < 3)) {
    return strNum;
  }

  // split into two strings
  let [theNum, decimal] = strNum.split('.');

  // keep track of where the comma should go
  let commaIndex = 0;

  // iterate backwards
  for (let i = theNum.length - 1; i >= 0; i--) {
    // every 3rd space should have a comma
    if (commaIndex > 0 && commaIndex % 3 === 0) {
      // slice the current number and inject a comma
      theNum = theNum.slice(0, i + 1) + ',' + theNum.slice(i + 1);
    }
    commaIndex++;
  }

  // if there was a decimal, re-insert here
  if (decimal) {
    theNum += `.${decimal}`;
  }

  return theNum;
}

// console.log(modelAddCommas(1)); // "1"
// console.log(modelAddCommas(1000)); // "1,000"
console.log(modelAddCommas(123456789)); // "123,456,789"
// console.log(modelAddCommas(3.141592)); // "3.141592"
// console.log(modelAddCommas(54321.99)); // "54,321.99"

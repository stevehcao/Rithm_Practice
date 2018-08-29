// Write a function called romanToInteger which accepts a roman numeral as a string and returns the integer value. 


// Here is a lookup for letters:   

// I  = 1
// V = 5 
// X = 10
// L = 50
// C = 100 
// D = 500
// M = 1000

// There are a few rules for writing numbers with Roman numerals.

// Repeating a numeral up to three times represents addition of the number. For example, III represents 1 + 1 + 1 = 3. Only I, X, C, and M can be repeated; V, L, and D cannot be, and there is no need to do so.

// Writing numerals that decrease from left to right represents addition of the numbers. For example, LX represents 50 + 10 = 60 and XVI represents 10 + 5 + 1 = 16.

// To write a number that otherwise would take repeating of a numeral four or more times, there is a subtraction rule. Writing a smaller numeral to the left of a larger numeral represents subtraction. For example, IV represents 5 - 1 = 4 and IX represents 10 - 1 = 9. To avoid ambiguity, the only pairs of numerals that use this subtraction rule are:

// IV = 4 = 5 - 1
// IX = 9 = 10 - 1
// XL = 40 = 50 - 10
// XC = 90 = 100 - 10
// CD = 400 = 500 - 100
// CM = 900 = 1000 - 100

// input: string
// output: number
//

function romanToInteger(str) {
  let sum = 0;
  let romans = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
  // if next # is larger subtract from total
  // else if the next number is small or equal or undefined then add to total
  for (let i = 0; i < str.length; i++) {
    //romans[str[i]]
    if (romans[str[i + 1]] > romans[str[i]]) {
      sum -= romans[str[i]];
    } else if (romans[str[i]] >= romans[str[i + 1]] || romans[str[i + 1]] === undefined) {
      sum += romans[str[i]];
    }
  }
  return sum;
}
console.log(romanToInteger('IV')) // 4
console.log(romanToInteger('VI')) // 6
// romanToInteger('IX')// 9
// romanToInteger('LXVIII')// 68
// romanToInteger('DCL') // 650
// romanToInteger('MDCLXIV') // 1664
console.log(romanToInteger('MCMXCVI')) // 1996




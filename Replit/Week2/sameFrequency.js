// Write a function called sameFrequency. Given two positive integers,
//find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N + M), where N is the number of digits in the first number,
// and M is the number of digits in the second number.

// Sample Input:

// function sameFrequency(num1, num2) {
//   // map the numbers and compare
//   let num1Map = new Map();
//   let num2Map = new Map();

//   // iterate over num1 and map each num to values
//   for (let num of num1.toString().split('')) {
//     // .get, .has, .set
//     if (num1Map.has(num)) {
//       num1Map.set(num, num++);
//     } else {
//       num1Map.set(num, 1);
//     }
//   }

//   for (let num of num2.toString().split('')) {
//     // .get, .has, .set
//     if (num2Map.has(num)) {
//       num2Map.set(num, num2Map.get(num));
//     } else {
//       num2Map.set(num, 1);
//     }
//   }

//   console.log(num1Map);
// }

function sameFrequency(num1, num2) {
  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');

  let obj1 = arr1.reduce((acc, curr) => {
    //console.log(acc);
    acc[curr] ? ++acc[curr] : (acc[curr] = 1);
    return acc;
  }, {});
  // console.log(obj1);
  let obj2 = arr2.reduce((acc, curr) => {
    acc[curr] ? ++acc[curr] : (acc[curr] = 1);
    return acc;
  }, {});
  console.log(obj2);
  for (let key in obj1) {
    if (!obj2[key]) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

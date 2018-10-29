// magic number array
// positive number only in array
//
/**
 * @param {int} magicNumber
 * @param {int[]} numbers
 * @return {boolean}
 */
// have to check if sum is less than or greater than magic #
//
function arithmeticBoggle(magicNumber, numbers) {
  let sum = numbers[0];
  if (numbers[0] === undefined && magicNumber === 0) return true;
  if (numbers.length === 1) {
    return magicNumber === sum;
  }
  for (let i = 1; i < numbers.length; i++) {
    if (sum > magicNumber) {
      sum = sum--;
    } else {
      sum = sum++;
    }
  }
  return sum === magicNumber;
}

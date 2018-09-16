/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // max money can get if you rob current house
  let rob = 0; 
  // max money you can get if you do NOT rob curr house
  let notrob = 0;
  for (let k = 0; k < nums.length; k++) {
      // temp var
      let temp = rob;
      // if rob current value prev house must not be robbed
      rob = nums[k] + notrob;
      // what is this doing!?
      notrob = Math.max(temp, notrob);
  }
  return Math.max(rob, notrob);
};
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // count of jewels you have
    // make hash map of jewels i have
    // iterate through jewels to make hash map
    // iterate through stones
      // count how much you have using the hash map
    let jewels = 0;
    let hash = {};
    for (let j of J) {
        hash[j] = true;
    }
    for (let s of S) {
        if (hash[s]) {
            ++jewels;
        }
    }
    return jewels;
};

// model used a set

function numJewelsInStonesModel(J,S) {
  const jewels = new Set();
  let count = 0;
}
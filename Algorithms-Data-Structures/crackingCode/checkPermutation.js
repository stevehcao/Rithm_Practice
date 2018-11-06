// given two strings, write a method to decide if one is a permutation of the other
// input: strings
// output: boolean
// make hash out of both strings and check key and values if they match

// top, pot = true
// lake cake = false

// ask about white space and capitailization

function perm(str1, str2) {
  // initial check for length
  if (str1.length !== str2.length) return false;
  let hash1 = {};
  let hash2 = {};

  for (let char of str1) {
    hash1[char] ? hash1[char]++ : (hash1[char] = 1);
  }

  for (let char of str2) {
    hash2[char] ? hash2[char]++ : (hash2[char] = 1);
  }

  for (let key in hash1) {
    if (hash1[key] !== hash2[key]) return false;
  }
  return true;
}

console.log(perm('top', 'pot')); //true
console.log(perm('rock', 'ockr')); //true
console.log(perm('rock', 'ocka')); //false

// sort string

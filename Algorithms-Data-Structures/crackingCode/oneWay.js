// there are three types of edits that can be performed on strings: insert a char, remove a char, or replace a char
// given two strings, write a function to check if they are one edit or zero edits away

// need to check if second string is possible by doing one of the 3 methods
// check length of string
// if longer where can you add
// if shorter then where can you delete?

// helper functions that will return altered string
function remove(str, i) {
  let strArr = str.split('');
  strArr.splice(i, 1);
  return strArr.join('');
}

function add(str, i, char) {
  let strArr = str.split('');
  strArr.splice(i, 0, char);
  return strArr.join('');
}

function replace(str, i, char) {
  let strArr = str.split('');
  strArr.splice(i, 1, char);
  return strArr.join('');
}

function oneWay(str1, str2) {
  if (str1.length === str2.length + 1) {
    // added a single char
    return editOneChar(str2, str1);
  }
  if (str1.length + 1 === str2.length) {
    // deleted a single char
    return editOneChar(str1, str2);
  }
  if (str1.length === str2.length) {
    // same length need to check if same string
    return editReplace(str1, str2);
  }
  return false;
}

// books way
function editReplace(str1, str2) {
  let foundDifference = false;
  // check to see if there is only ONE difference
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}

function editOneChar(str1, str2) {
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < str1.length && idx2 < str2.length) {
    if (str1[idx1] !== str2[idx2]) {
      if (idx1 !== idx2) {
        return false;
      }
      // the first time there is an insertion or deletion move idx2 up
      idx2++;
    } else {
      idx1++;
      idx2++;
    }
  }
  return true;
}

// console.log(remove('hello', 0));
// console.log(add('hello', 0, 'a'));
// console.log(replace('hello', 0, 'a'));
// console.log(replace('goodbye', 2, 'c'));

console.log(oneWay('pale', 'ple')); //true;
console.log(oneWay('pales', 'pale')); //true;
console.log(oneWay('pale', 'bale')); //true;
console.log(oneWay('pale', 'bake')); //false;

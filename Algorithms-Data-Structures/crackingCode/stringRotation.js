/**
 * assume you have a method called isSubstring which checks if one word is
 * a substring of another.  Given two strings check if string 2 is a rotation of string 1
 * "waterbottle" is a rotation of erbottlewat"
 */
// we would want to know where the rotation point is
// for example s1 = x + y = waterbottle
// s2 = x = wat, y = erbottle
// s2 WILL ALWAYS be a SUBSTRING of s1+s1
// waterbottlewaterbottle, erbottlerwat

function isRotation(str1, str2) {
  // check for easy failing cases such as different lengths and are not empty
  if (str1.length === str2.length && str1.length > 0) {
    // concat str1 with itself because str2 will always be a substring of that
    const concatStr = str1 + str1;
    return isSubstring(concatStr, str2);
  }
  return false;
}

// assumed isSubstring function
// return boolean to see if string is a substring

function isSubstring(str1, str2) {
  // check to see if str2 is a subtring of str1
  return str1.includes(str2);
}

// practice removing a char from string
function removeChar(str, idx) {
  const strArr = str.split('');
  const removedChar = strArr.splice(idx, 1);
  return strArr.join('');
}

console.log(removeChar('hello', 1));

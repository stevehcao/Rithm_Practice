/**
 *
 * @param {String} str
 */
function reverse(str) {
  // base case
  // slice string to make shorter
  if (str.length === 0) return '';
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

/**
 * closure practice
 *
 */
/*  quick ES6 review 
  var, will allow you to reassign and redeclare the variables
  let, will only allow you to reassign but NOT redeclare
  const, is a constant and you will NEVER be able to change this variable
*/

// forgot to return the function!

function counter() {
  let num = 0;
  // another function that will reference the outer variable
  return function counting() {
    return ++num;
  };
}

let run = counter();

// forgot to call run! need to ask about counter()();
console.log(run()); // 1
console.log(run()); // 2
console.log(run()); // 3

console.log(counter()()); // 1

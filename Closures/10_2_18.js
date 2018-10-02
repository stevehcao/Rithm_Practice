// closure practice

function count() {
  let counter = 0;
  return function inner() {
    return (counter = counter + 1);
    // or ++counter;
  };
}

let sum = count();
console.log(sum()); // 1
console.log(sum()); // 2
console.log(count()()); // 1

```js
// Assume a and b are integers
function multiply(a, b) {
  let sum = 0;
  for(let i = 0; i < a; i++) {
    sum += b;
  }

  return sum;
}```

// time: O(n) for multiply

```js
// Assume a and b are integers
function multiplyTwo(a, b) {
  let bigger = Math.max(a, b);
  let smaller = bigger === a ? b : a;

  let sum = 0;
  while(bigger >= 1) {
    if(bigger % 2 === 1) {
      sum += smaller;
    }

    bigger = bigger >> 1;
    smaller = smaller << 1;
  }

  return sum;
}```

// what does bigger and smaller do?
// "Russian Peasant Multiplication".
/* 
also, it's worth noting that: `bigger = bigger >> 1` is the same as `bigger = Math.floor(bigger / 2)` 
and `smaller = smaller << 1` is the same as `smaller = smaller * 2`
*/

// multiplyTwo = O(log(Max(a,b)))

```js
// Assume students is an array of integers
function computePairs(students) {
  let pairs = [];
  for(let outer of students) {
    for(let inner of students) {
      pairs.push(multiply(outer, inner));
    }
  }
}```

// O(n^3) because multiply is another O(n)
// more precise = O(n^2) * avg(n)

```js
// Assume students is an array of integers
function computePairsTwo(students) {
  let pairs = [];
  for(let outer of students) {
    for(let inner of students) {
      pairs.push(multiplyTwo(outer, inner));
    }
  }
}```
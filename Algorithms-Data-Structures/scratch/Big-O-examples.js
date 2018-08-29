function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUp2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(3)); // 6
console.log(addUp2(4)); // 10


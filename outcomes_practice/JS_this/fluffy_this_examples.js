class Cat {
  meow() {
    return 'meow, I am ' + this.name;
  }
}

const fluffy = new Cat();
fluffy.name = 'Fluffy';

console.log(fluffy.meow()); // "meow, I am Fluffy"

const doMeow = fluffy.meow;
// console.log(doMeow()); // error b/c cannot read property of 'name' of undefined
const betterMeow = doMeow.bind(fluffy);
console.log(betterMeow); // is a bound meow
console.log(betterMeow());

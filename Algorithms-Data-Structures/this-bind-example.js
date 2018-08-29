class Cat {
  meow() {
    return `meow, I am ${this.name}`
  }
}

// make a new instance of the Cat (class is just on object)
const fluffy = new Cat;
// add in a key of name and a value of 'Fluffy'
fluffy.name = 'Fluffy'
console.log(fluffy.meow()); // expect "meow, I am Fluffy"

const doMeow = fluffy.meow
// console.log(doMeow()); this will throw errow because this.name is undefined
// doMeow is only the function from the Cat class it is NOT bound to fluffy
// and if you don't bind anything in JS it will be bound to window like ==> window.doMeow()

betterMeow = doMeow.bind(fluffy) // like when we bind something in react with arrow function or this.name.bind(this) in the constructor
// in betterMeow the doMeow is bound to fluffy so that this.name has meaning
console.log(betterMeow());



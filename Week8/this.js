var instructorOne = {
  firstName: "Elie"
}

var instructorTwo = {
  firstName: "Joel",
  sayHi: function () {
    return `Hello ${this.firstName}`
  },
  sayBye() {
    return `Bye ${this.firstName}`
  },
  sayBOOM: () => {
    return `BOOM! ${this.firstName}`
  }
}

// console.log(instructorTwo.sayBye.call(instructorOne));
// console.log(instructorTwo.sayBye.apply(instructorOne));

// in class examples
var instructor0 = {
  firstName: "Elie",
  moreData: {
    lastName: "Schoppik",
    fullName: function () {
      return `${this.firstName} ${this.lastName}`
    }
  }
}

var instructor = {
  firstName: "Joel",
  greet: function (firstGreeting, secondGreeting) {
    return `${firstGreeting} ${secondGreeting} ${this.firstName}`
  }
}

var greet = instructor.greet.bind(instructor, "Hello. ")

greet("What about now?")
"Hello.  What about now? Joel"

// this will have two different definition because of the two functions within the instructor 2 object
// will need to use BIND in order to explicit setting of this keyword.
var instructor2 = {
  firstName: "Joel",
  sayHi: function () {
    setTimeout(function () {
      console.log("this inside setTimeout?", this)
      console.log(`Hello ${this.firstName}`)
    }.bind(instructor), 1000)
  }
}

// example with arrow function instead of bind
// the arrow function will NOT have a this keyword
var instructor3 = {
  firstName: "Joel",
  sayHi: function () {
    setTimeout(() => {
      console.log("this inside setTimeout?", this)
      console.log(`Hello ${this.firstName}`)
    }, 1000)
  }
}

// example with fancy way of saying sayHi: function()
var instructor4 = {
  firstName: "Joel",
  sayHi() {
    setTimeout(() => {
      console.log("this inside setTimeout?", this)
      console.log(`Hello ${this.firstName}`)
    }, 1000)
  }
}

// class DO NOT add comma after functions/objects/key/values
// all instance methods
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  abbreviate() {
    return `${this.firstName[0]}.${this.lastName[0]}.`
  }

}

var elie = new Student('Elie', 'Schoppik');

console.log(elie.abbreviate());

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, species) {
    // WILL NEED super() 
    super(name)
    this.species = species
  }
}
var fido = new Dog('fido', 'german');

console.log(fido);


// make a class for a Vehicle
// every vehicle instance has a make, model and year
// every vehicle instance has a method called honk
// which returns the string "Beep!"

// parent and base class
class Vehicle {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
  honk() {
    return 'Beep!'
  }
}

// make a class for a Car
// it inherits from Vehicle
// every instance of Car has a property called numWheels = 4
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year)
    this.numWheels = 4
  }
}

// make a class for a Motorcyle
// it inherits from Vehicle
// every instance of Motorcycle has a property called numWheels = 2
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year)
    this.numWheels = 2
  }
}



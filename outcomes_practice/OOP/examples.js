// constructor function builds Animals
function Animal(species) {
  this.species = species || 'Unknown'; // default the parameter to Unknown
  console.log(this.species + ' is born'); // just to see when this constructor is called
}

// methods are defined on the prototype to be shared by all instances of this class
//  "this" is determined at runtime (line 17 below when the panda eats bamboo)
Animal.prototype.eat = function(food) {
  console.log(this.species + ' eats the ' + food + '.');
};

Animal.prototype.die = function() {
  console.log(this.species + ' dies.');
};

var panda = new Animal('Panda');
panda.eat('bamboo');
// Panda eats the bamboo.

function KoiFish(name, color, size) {
  // inherit from Animal by calling its constructor
  Animal.call(this, 'Koi Fish');
  this.name = name;
  this.color = color;
  this.size = size;
}

// override the default prototype with one that is based on Animal.prototype
KoiFish.prototype = Object.create(Animal.prototype);
// but change the prototype's constructor function to reference KoiFish instead of Animal
KoiFish.prototype.constructor = KoiFish;

KoiFish.prototype.swim = function() {
  // it gets "this.species" from the Animal (parent) constructor
  console.log(this.name + ' the ' + this.species + ' swims.');
};

var bob = new KoiFish('Bob', 'orange', 14);
bob.swim();
// "Bob the Koi Fish swims."

bob.eat('bread');
// Koi Fish eats the bread.
//  (this method comes from the Animal prototype)

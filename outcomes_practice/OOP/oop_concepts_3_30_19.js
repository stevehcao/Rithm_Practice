// Classes are a “blueprint” of functionality:

class TriangleNoConstructor {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  describe() {
    return `Area is ${this.getArea()}.`;
  }
}

let myTri = new TriangleNoConstructor(); // "instantiation" of triangle
myTri.a = 3;
myTri.b = 4;
myTri.getArea(); // 6
myTri.getHypotenuse(); // 5

/* Defines the methods each instance of Triangle will have
Make a new triangle with new Triangle()
Can still add/look at arbitrary keys (“properties”)
this is “the actual triangle in question”
Class names should be UpperCamelCase

Reduces confusion between triangle (an actual, individual triangle) and Triangle (the class of triangles)

A triangle is still an object: */

console.log(typeof myTri); // 'object'
console.log(myTri instanceof TriangleNoConstructor); // true

// inheritance and super
/**
 *
 */

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.`;
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    // call parent constructor with (a, b)
    super(a, b);
    this.color = color;
  }

  // will "inherit" getArea, getHypotenuse

  // "override" describe() w/new version
  // super.describe() is from parent

  describe() {
    return super.describe() + ` Color is ${this.color}!`;
  }
}

let blueTriangle = new ColorTriangle(2, 3, 'blue');
// console.log(blueTriangle.getArea(), 'BLUE');
console.log(blueTriangle.describe());

/**
 * Terminology
Instance
an individual instance; an array is “instance” of Array
Class
blueprint for making instances
Property
piece of data on an instance (e.g. myTriangle.a)
most languages call this idea an “instance attribute”
Method
function defined by a class, can call on instance
most accurate to call these “instance methods”
Parent / Superclass
More general class you inherit from
Rectangle might be parent of Square
Child / Subclass
More specific class (a Square is a special kind of Rectangle)
Inherit
Ability to call methods/get properties defined on ancestors
Object Orientated Programming
Using classes & instances to manage data & functionality together
Often makes it easier to manage complex software requirements

 */

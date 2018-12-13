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

// 1) implicit default binding, global object in non-strict mode
// 2) if there is a call site and context
// 3) explicit binding: call/apply  fn.call(obj)
// 4) explicit bind: bind hard binding, always predictable "this"
// 5) new keyword
// creates new object out of thin air
// ** new object is linked to another object
// new obj gets passed in as this context to the funciton call
// implied return this if nothing else returned

// flexible and predictable use this for flexibility.
// lexical scope is more predictable
function foo() {
  console.log(this.bar);
}

var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo };
var o3 = { bar: 'bar3', foo: foo };

foo();
o2.foo();
o3.foo();

function footest(baz, bam) {
  console.log(`${this.kyle} ${baz} ${bam}`);
}

var obj2 = { kyle: 'bar' };
// explicit binding
var fooNow = footest.bind(obj2, 'baz');

fooNow('bam');

// order of precendence
// 1) is function called by new?
// 2) is fn called by call or apply?  bind is apply
// 3) is function called on a context object?
// 4) default: global object( except strict mode)

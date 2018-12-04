// mimic folder structures of files

// bring in assertion library
const assert = require('chai').assert;
const app = require('../app');

// test for my app file
describe('App', function() {
  it('sayHello should return hello', function() {
    // first param is the function
    // second param is the expected result
    // assert.equal(app.sayHello(), 'hello');
    let result = app.sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', function() {
    let result = app.sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be above 5', function() {
    let result = app.addNumbers(5, 5);
    assert.isAbove(result, 5);
  });

  it('addNumbers should return type number', function() {
    let result = app.addNumbers();
    assert.typeOf(result, 'number');
  });
});

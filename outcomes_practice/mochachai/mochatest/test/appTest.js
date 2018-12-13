// mimic folder structures of files
// needs a directory called TEST!!!

// bring in assertion library with chai
const assert = require('chai').assert;
const app = require('../app');

// results
const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5, 5);

// test for my app file
describe('App', function() {
  // can nest describe
  describe('sayHello()', function() {
    it('sayHello should return hello', function() {
      // first param is the function
      // second param is the expected result
      // assert.equal(app.sayHello(), 'hello');
      // let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function() {
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function() {
      let result = app.addNumbers(5, 5);
      assert.isAbove(result, 5);
    });

    it('addNumbers should add negative numbers', function() {
      let result = app.addNumbers(-5, -5);
      assert.equal(result, -10);
    });

    it('addNumbers should return type number', function() {
      let result = app.addNumbers();
      assert.typeOf(result, 'number');
    });
  });
});

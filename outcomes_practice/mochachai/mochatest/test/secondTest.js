const assert = require('chai').assert;
const second = require('../second');

describe('second', function() {
  it('should add 5 and return 10', function() {
    const result = second(5);
    assert.equal(result, 10);
  });

  it('should return type number', function() {
    const result = second(5);
    assert.typeOf(result, 'number');
  });
});

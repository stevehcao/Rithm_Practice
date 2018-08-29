# Tests for splitsquare.js
#
# Author: Joel Burton <joel@joelburton.com>

if require?
  `chai = require("chai")`
  `({dump, is_valid, simplify, add} = require("../splitsquare"))`

assert = chai.assert


suite "dump", =>
  test "should dump ints", =>
    assert.equal dump(0), "0"
    assert.equal dump(1), "1"

  test "should dump arrays", =>
    assert.equal dump([0, 1, 0, 1]), "0 1 0 1"

  test "should handle nesting", =>
    assert.equal dump([0, 0, 0, [1, 1, [0, 0, 0, 0], 1]]), "0 0 0 1 1 0 0 0 0 1"


suite "is_valid", =>
  test "should allow correct ints", =>
    assert.isTrue is_valid 0
    assert.isTrue is_valid 1

  test 'should reject wrong ints', =>
    assert.isFalse is_valid 3

  test 'should reject wrong types', =>
    assert.isFalse is_valid {hey: "there"}
    assert.isFalse is_valid "yo"
    assert.isFalse is_valid "1"

  test "should disallow wrong-length arrays", =>
    assert.isFalse is_valid [0, 0, 0, 0, 0]

  test "should allow good arrays", =>
    assert.isTrue is_valid [0, 0, 0, 0]

  test "should handle nesting properly", =>
    assert.isTrue is_valid [0, 0, 0, [1, 1, 1, [0, 0, 0, 0]]]
    assert.isFalse is_valid [0, 0, 0, [1, 1, 1, 1, [0, 0, 0, 0]]]


suite "simplify", =>
  test "should be a no-op for ints", =>
    assert.equal simplify(0), 0
    assert.equal simplify(1), 1

  test "should not simplify non-matching arrays", =>
    assert.deepEqual simplify([1, 0, 1, 0]), [1, 0, 1, 0]

  test "should simplify matching arrays", =>
    assert.equal simplify([1, 1, 1, 1]), 1

  test "should handle nesting", =>
    assert.equal simplify([0, 0, 0, [0, 0, 0, [0, 0, 0, 0]]]), 0


suite "add", =>
  test "should add ints", =>
    assert.equal add(0, 0,), 0
    assert.equal add(1, 0,), 1
    assert.equal add(0, 1,), 1
    assert.equal add(1, 1,), 1

  test "should add arrays", =>
    assert.deepEqual add([1, 0, 1, 0], [0, 0, 0, 1]), [1, 0, 1, 1]

  test "should handle nesting", =>
    assert.deepEqual add(0, [1, 0, 1, 0]), [1, 0, 1, 0]
    assert.deepEqual add(1, [1, 0, 1, 0]), [1, 1, 1, 1]

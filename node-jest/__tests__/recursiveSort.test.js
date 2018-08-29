// importing recursiveSort
const recursiveSort = require('../recursiveSort');
let obj2 = [
  { five: 'hello', object: 3 },
  { six: 6, a: 'running' },
  { b: 1, c: 2, a: 3 }
];

let obj2Expected = [
  { five: 'hello', object: 3 },
  { a: 'running', six: 6 },
  { a: 3, b: 1, c: 2 }
];

let obj3 = [
  {
    five: 'hello',
    object: 3,
    aNestedObj: [{ nested: 'obj', z: 1, c: 3, a: 4 }]
  },
  { six: 6, a: 'running' },
  { b: 1, c: 2, a: 3 }
];

let obj4 = { arr: [{ hello: 1, z: 2, a: 1 }, { what: 'huh', who: 1 }] };
//let objFinal =

test('works with basic object', () => {
  let obj1 = {
    z: 1,
    b: 2,
    a: 'hello'
  };
  let objExpected = {
    a: 'hello',
    b: 2,
    z: 1
  };
  // where you make assertion
  const result = recursiveSort(obj1);
  // smoke test to make sure it fails by passing null
  // .toEqual is a DEEP equality check
  expect(result).toEqual(objExpected);
});

test('works with basic array', () => {
  const result = recursiveSort(obj2);
  expect(result).toEqual(obj2Expected);
});

test('works with array of objects and nested objects within each object', () => {
  const result = recursiveSort(obj3);
  expect(result).toEqual(null);
});

test('line 20', () => {
  const result = recursiveSort(obj4);
  expect(result).toEqual(null);
});

test('Works with arr', () => {
  let obj2 = [
    { a: 'first', b: 'second' },
    { d: 'yo', c: [{ a: 'first', b: 'second' }], y: 3 },
    { a: [1, 2, 3] }
  ];
  const result = recursiveSort(obj2);
  console.log(result);
  expect(result).toEqual([
    { a: 'first', b: 'second' },
    { c: [{ a: 'first', b: 'second' }], d: 'yo', y: 3 },
    { a: [1, 2, 3] }
  ]);
});

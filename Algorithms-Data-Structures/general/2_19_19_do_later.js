// Here's a problem I got in a pramp practice interview:
// Given a dictionary dict, write a function flattenDictionary
// that returns a flattened version of it.
//input:
let dict = {
  Key1: '1',
  Key2: {
    a: '2',
    b: '3',
    c: {
      d: '3',
      e: {
        '': '1'
      }
    }
  }
};
//output:
// {
//   "Key1" : "1",
//   "Key2.a" : "2",
//   "Key2.b" : "3",
//   "Key2.c.d" : "3",
//   "Key2.c.e" : "1"
// }

//Prob #2
// Consider a special family of Engineers and Doctors. This family has the following rules:

//     Everybody has two children.
//     The first child of an Engineer is an Engineer and the second child is a Doctor.
//     The first child of a Doctor is a Doctor and the second child is an Engineer.
//     All generations of Doctors and Engineers start with an Engineer.

// We can represent the situation using this diagram:

// ```
//                 E
//            /         \
//           E           D
//         /   \        /  \
//        E     D      D    E
//       / \   / \    / \   / \
//      E   D D   E  D   E E   D
// ```

// Given the level and position of a person in the ancestor tree above, find the profession of the person.
// NOTE: in this tree first child is considered as left child, second - as right. POSITION AND LEVEL ARE 1 INDEXED.

// # Example
// For `level = 3` and `pos = 3`, the output should be
// `findProfession(level, pos) = "Doctor"`.

// ## Test Case

// Input:
//     level: 10
//     pos: 470
// Expected Output:
//     "Engineer"

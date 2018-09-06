// Instructions from your teacher:
// Write your own getElementById function. It should search the DOM for the given id input and return the first matching DOM element that has that id.

// Look into a recursive solution to search the successive nested element children
// You can access the DOM tree through window.document
// A DOM element has an id property
// https://developer.mozilla.org/en-US/docs/Web/API/Element/id

// getElementById(window.document, "menu")
// //returns an HTMLElement with a tagName of SECTION

// Good luck!

window.addEventListener('load', function(e) {
  //call your function here, so to sure that the DOM has loaded
});

function getElementById(rootNode, id) {
  // write your solution here
  // check if node has the id, if so return that node
  // make a stack and push the root node into it

  // while stack is not empty loop
  // loop through the children of the current node
  // push to stack

  let stack = [];
  stack.push(rootNode);

  while (stack.length > 0) {
    let currentNode = stack.pop();
    if (currentNode.id === id) return currentNode;

    for (let child of currentNode.children) {
      stack.push(child);
    }
  }
}

//use helper functions if you prefer

function getElementByIdRecursion(rootNode, id) {
  // check node for id
  // loop over children
  // hold on to what was returned from call stack, this is where
  // recursion happens

  // if not undefined return what you held on to

  if (rootNode.id === id) return rootNode;
  for (let child of rootNode.children) {
    let returnedChild = getElementByIdRecursion(rootNode, id);
    // once we are here that means we want to check if returned value is undefined
    // move to next step of for loop
    if (returnedChild !== undefined) {
      return returnedChild;
    }
  }
}

// Write your own getElementsByClassName function. It should search the DOM for the given class name input and return an array of DOM elements that have a class name that matches the search input.

// Look into a recursive solution to search the successive nested element children
// You can access the DOM tree through window.document
// A DOM element has a classList that can contain 1 or more class names
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// getElementsByClassName(window.document, "section-title")
// //returns an array of HTMLElements with length 3

// Good luck!

function getElementsByClassName(rootNode, className) {
  // BFS with a queue
  // push rootNode
  // the result is an array
  
  // if there is something on the queue loop through it's children
  // current node is the first thing inside the queue
  // check if class name matches, push to result if it is
  
  // return result

  let queue = [];
  queue.push(rootNode);
  let results = [];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    // logic to check class name
    if (currentNode.classList && currentNode.classList.contains(className)) {
      results.push(currentNode);
    }
    for (let child of currentNode.children) {
      queue.push(child);
    }
  }
  return results;
}

// helper recursion
// 
function getElementsByClassNameRecursion(rootNode, className) {
  let results = [];
  // helper function recursion
  function _traverse(currentNode, name) {
    // check if current class if contains then push onto results
    // keep looping that children
    if (currentNode.classList && currentNode.classList.contains(name)) {
      results.push(currentNode);
    }
    for (let child of currentNode.children) {
      _traverse(child);
    }
    // return;
  }
  // call traverse
  _traverse(rootNode, className);
  return results;
}

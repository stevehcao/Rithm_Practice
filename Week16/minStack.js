/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  // if x < this.getMin 
    // push x onto min stack
  // push old min onto min stack again
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.min.pop();
  this.stack.pop();
  // pop min stack and stack
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  // get min somehow in constant time
  // recursively getMin by popping
  // base case
  if (this.stack.length === 0) {
      return;
  }
  // pop off top and hold on to this value
  let valToCheck = this.stack.pop();
  if (this.stack.top() < valToCheck) {
      this.stack.top() = valToCheck;
  }
  this.stack.getMin();
  return valToCheck;
  // return from min stack
  // return this.min[this.min.length -1]
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// var obj = Object.create(MinStack)
// console.log(obj._array.push(2));



// ***************** Model ********************
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min = Infinity;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  // if x < this.getMin 
    // push x onto min stack
  // push old min onto min stack again
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.min.pop();
  this.stack.pop();
  // pop min stack and stack
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

var obj = Object.create(MinStack)
console.log(obj._array.push(2));
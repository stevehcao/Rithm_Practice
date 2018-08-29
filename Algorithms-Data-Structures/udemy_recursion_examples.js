// Recursive Version
function countDown(num){
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3)

// Iterative Version
function countDownIterative(num){
  for(var i = num; i > 0; i--){
      console.log(i);
  }
  console.log("All done!")
}

function sumRange(num){
  if(num === 1) return 1; 
  return num + sumRange(num-1);
}

console.log(sumRange(4));


// helper method recursion
function collectOddValuesHelperMethod(arr){
    
  let result = [];

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}


collectOddValuesHelperMethod([1,2,3,4,5,6,7,8,9])

// PURE recursion
function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])

function factorial(num){
  if(num < 1) return 0;
  if(num === 1) return 1;
  return num * factorial(num-1);
}

console.log(factorial(4));

// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {

    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([]));

// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// FLATTEN
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
                                      
                                                              
                                                                           
                          
          
                 
                                  
                               


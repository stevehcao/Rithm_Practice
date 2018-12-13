function returnPromise() {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('yay'), 5000);
  });

  return p;
}

var q = returnPromise();
q.then(value => console.log(value));

// provides a then and catch which accepts a callback
// a promise is a new global object (ES6) serves as a placeholder for async
// operation
// ** a promise represents a pending value ( gurantee that there will either be a resolved or rejected value)
fetch('https://httpbin.org/get')
  .then(function(response) {
    // the Promise resolved successfully
    console.log(response);
  })
  .catch(function(error) {
    // the Promise was rejected
    console.log(error);
  });

function myAsyncFunction() {
  // return a new Promise
  return new Promise((resolve, reject) => {
    /*

      DO ASYNC STUFF HERE

    */

    // if it succeeds, call the resolve callback
    resolve(/* success value*/);

    // if it fails, call the reject callback
    reject(/* fail value*/);
  });
}

function mockGetUserInfo() {
  var p = new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          id: 1,
          firstName: 'Matt',
          lastName: 'Lane',
          favorites: ['math', 'ice cream', 'sunshine']
        }),
      3000
    );
  });

  return p;
}

// make own promise
function waitForSomeTime(ms) {
  return new Promise(function(resolve, reject) {
    try {
      setTimeout(function() {
        return resolve('Time is up!');
      }, ms);
    } catch (err) {
      return reject(err);
    }
  });
}

waitForSomeTime(1000).then(res => console.log(res));

var mattRequest = mockGetUserInfo();
console.log(mattRequest);

// mattRequest.then(data => console.log(data));

mattRequest.then(data => {
  console.log(data);
  throw "I'm the return value of the .then callback!!";
});

// VS

mattRequest
  .then(data => {
    console.log(data);
    throw "I'm the return value of the .then callback!!";
  })
  .catch(err => 'oops: ' + err);

// closure examples
function secrets() {
  var secretNum = 42;

  function showMeTheSecrets() {
    console.log(secretNum);
  }

  showMeTheSecrets();
}

function secretsWithClosure() {
  var secretNum = 42;

  return function showMeTheSecrets() {
    console.log(secretNum);
  };
}

function createBankAccount(name, pin, initialAmount) {
  let amount = initialAmount;

  let publicAPI = {
    deposit: function(pinGuess, amountToDeposit) {
      if (pinGuess !== pin) throw 'Invalid pin code.';
      amount += amountToDeposit;
      return `Deposit Successful. Current balance: ${amount}.`;
    },
    withdraw: function(pinGuess, amountToWithdraw) {
      if (pinGuess !== pin) throw 'Invalid pin code.';
      if (amountToWithdraw > amount)
        throw "You don't have enough money to do that :(";
      amount -= amountToWithdraw;
      return `Withdrawal Successful. Current balance: ${amount}.`;
    }
  };

  return publicAPI;
}

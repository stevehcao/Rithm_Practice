function returnPromise() {
  var p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('yay'), 5000);
  });

  return p;
}

var q = returnPromise();
q.then(value => console.log(value));

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

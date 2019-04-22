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

function testAsync(ms) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(function() {
        // mock network request or async thing here
        let data = 'fake data from API';
        return resolve(data);
      }, ms);
    } catch (error) {
      return reject(error);
    }
  });
}

// make new promise from scratch
function promisePractice(ms) {
  // return a new promise
  // use try catch and resolve/reject
  return new Promise((resolve, reject) => {
    try {
      // async here
      setTimeout(() => {
        // mock network req here
        let fakeData = 'random data from API';
        return resolve(fakeData);
      }, ms);
    } catch (err) {
      return reject(err);
    }
  });
}

const fs = require('fs');
const process = require('process');

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      // handle possible err and kill process tell shell it errored
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    }
    console.log(`files contants: ${data}`);
  });

  console.log('reading file');
}

cat(process.argv[2]);

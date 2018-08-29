SplitSquare JS
==============

This is a JavaScript version of Split Square.

To demonstrate how to write tests in JS, tests are provided. The tests are written
in "chai" and run with a test runner called "mocha".

To run the tests in a browser:

1. Open the file test/splitsquare.test.html in your browser

To run the tests at the command line:

1. Install node/npm: https://nodejs.org/en/download/
2. npm install mocha chai
3. mocha -u tdd test

CoffeeScript Tests
------------------

As an example, tests written in CoffeeScript are also provided.
The tests are written in "chai" and run with a test runner called "mocha".

CoffeeScript is a different language than JavaScript --- but it compiles down
to JavaScript. It has less syntactical "noise" than JavaScript (curly braces aren't
used, and parentheses are often optional, for example, which can make it
particularly nice for writing tests, as it allows you to get rid of a lot of
the syntax noise that makes it hard to read a test.

The tests themselves are the same as the ones provided in the above section; it
wouldn't normally be useful to provide tests written in both languages. This is
just to provide exmaples of CoffeeScript tests.

To run the tests in a browser:

1. Open the file test-coffee/splitsquare.test.html in your browser

To run the tests at the command line:

1. Install node/npm: https://nodejs.org/en/download/
2. npm install mocha chai coffee-script
3. mocha -u tdd --compilers coffee:coffee-script --require coffee-script/register test-coffee

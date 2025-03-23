 // helpers.js

// Function that receives a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    // Do something
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    // Do something
  };
}

module.exp

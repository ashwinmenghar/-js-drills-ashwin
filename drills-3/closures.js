// const count = counterFactory();

// console.log(count.increment());
// console.log(count.decrement());

function counterFactory() {
  let counter = 0;

  return {
    increment() {
      counter++;
      return counter;
    },

    decrement() {
      counter--;
      return counter;
    },
  };

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
}

// const sayHelloTo = limitFunctionCallCount((name) => `Hello, ${name}`, 2);

// console.log(sayHelloTo("James"));
// console.log(sayHelloTo("Michael"));
// console.log(sayHelloTo("Robert"));
// console.log(sayHelloTo("John"));

function limitFunctionCallCount(cb, n) {
  let count = 0;

  return function (...args) {
    if (count < n) {
      count++;
      return cb(...args);
    } else {
      return null;
    }
  };

  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
}

// Example usage:
function add(a, b) {
  return a + b;
}

// const cachedAdd = cacheFunction(add);

// console.log(cachedAdd(12, 4));
// console.log(cachedAdd(2, 4));
// console.log(cachedAdd(6, 5));
// console.log(cachedAdd(12, 4));
// console.log(cachedAdd(6, 5));

function cacheFunction(cb) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(...args);
    if (cache[key] != null) return cache[key];

    const newResult = cb(...args);
    return (cache[key] = newResult);
  };

  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
}

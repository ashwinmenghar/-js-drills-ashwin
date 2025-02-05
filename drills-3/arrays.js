const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/

// each(items, (ele, i) => {
//   console.log(ele, i);
// });
function each(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }

  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
}

// console.log(map(items, (ele) => ele - 10));
function map(elements, cb) {
  let result = [];
  for (let index = 0; index < elements.length; index++) {
    result.push(cb(elements[index]));
  }
  return result;
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
}

// console.log(reduce(items, (acc, num) => acc + num));
function reduce(elements, cb, startingValue) {
  let sum = startingValue !== undefined ? startingValue : elements[0];
  let index = startingValue !== undefined ? 0 : 1;

  for (index; index < elements.length; index++) {
    sum = cb(sum, elements[index]);
  }

  return sum;

  // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
}

// console.log(find(items, (ele) => ele == 1));
function find(elements, cb) {
  for (let index = 0; index < elements.length; index++) {
    if (cb(elements[index])) {
      return true;
    }
  }

  return undefined;
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
}

// console.log(filter(items, (ele) => ele == 1));
function filter(elements, cb) {
  let result = [];
  for (let index = 0; index < elements.length; index++) {
    if (cb(elements[index]) == true) {
      result.push(elements[index]);
    }
  }
  return result;
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
}

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

// console.log(flatten(nestedArray));
function flatten(elements) {
  let result = [];

  function flattenRecursively(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenRecursively(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  flattenRecursively(elements);
  return result;

  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
}

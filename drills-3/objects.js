const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

// console.log(keys(testObject));
function keys(obj) {
  let result = [];

  for (let key in obj) {
    result.push(key);
  }
  return result;
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
}

// console.log(values(testObject));
function values(obj) {
  let result = [];

  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
}

// console.log(
//   mapObject(testObject, (val, key) => {
//     return key == "age" ? val + 10 : val;
//   })
// );
function mapObject(obj, cb) {
  for (let key in obj) {
    obj[key] = cb(obj[key], key);
  }

  return obj;
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
}

// console.log(pairs(testObject));
function pairs(obj) {
  let result = [];
  for (const key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
}

/* STRETCH PROBLEMS */

// console.log(invert(testObject));
function invert(obj) {
  let result = {};
  for (const key in obj) {
    result[obj[key]] = key;
  }
  return result;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
}

// console.log(
//   defaults({ name: "John Robert", location: "USA", age: 26 }, testObject)
// );

function defaults(obj, defaultProps) {
  for (let key in defaultProps) {
    if (!(key in obj)) {
      obj[key] = defaultProps[key]; // Assign default value only if not present
    }
  }
  return obj;

  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
}

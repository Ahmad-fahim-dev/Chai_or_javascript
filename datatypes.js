// javascript is dynamically typed, so we don't have to declare the type of a variable when we create it. However, there are several built-in data types in JavaScript that we can use to store different kinds of data. Here are some of the most common data types in JavaScript:

let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let hobbies = ["reading", "traveling", "cooking"];

// null is a special value that represents the absence of any object value. It is often used to indicate that a variable has no value or that an object property is empty.
let emptyValue = null;

// undefined is a special value that indicates that a variable has not been assigned a value. It is also the default value of uninitialized variables.
let uninitializedVariable;

// symbol is used show uniques and immutable data type that can be used as an identifier for object properties. It is often used to create private properties in objects or to define constants.

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent);  // "boolean"
console.log(typeof hobbies); // "object"
console.log(typeof emptyValue); // "object" (this is a quirk in JavaScript  )
console.log(typeof uninitializedVariable); // "undefined"

console.table([name, age, isStudent, hobbies, emptyValue, uninitializedVariable])
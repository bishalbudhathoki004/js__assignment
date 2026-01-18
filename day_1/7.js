/*Task 7 – Default Parameters
 Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.*/

 // The function with a default parameter
const sayHello = (name = "Guest") => {
  return `Hello, ${name}!`;
};

// 1. Called WITH an argument
console.log(sayHello("Bishal")); // Output: Hello, Bishal!

// 2. Called WITHOUT an argument
console.log(sayHello());         // Output: Hello, Guest!
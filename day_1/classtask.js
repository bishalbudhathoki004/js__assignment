// ===============================
// Destructuring Arrays
// ===============================
const arr1 = [10, 30, 50, 70, 90];

const [a, b, c, d, e, f] = arr1;
console.log("Array Destructuring:");
console.log(a, b, c, d, e, f); // f will be undefined



// ===============================
// Destructuring Objects
// ===============================
const person = {
  name: "John",
  age: 25,
  city: "New York",
  country: "USA",
  status: true
};

const { name, age, city, country, status } = person;
console.log("\nObject Destructuring:");
console.log(name, age, city, country, status);



// ===============================
// Default Parameters
// ===============================
const multiply = (a = 0, b = 0) => a * b;

console.log("\nDefault Parameters (Multiply):");
console.log(multiply(5, 4)); // 20
console.log(multiply(5));    // 0



const divide = (x = 1, y = 1) => x / y;

console.log("\nDefault Parameters (Divide):");
console.log(divide(20, 4)); // 5
console.log(divide(20));    // 20



// ===============================
// Spread Operator (Arrays)
// ===============================
const fruits1 = ["apple", "banana", "mango"];
const vegetables1 = ["carrot", "broccoli", "spinach"];

const mergedArray = [...fruits1, ...vegetables1];
console.log("\nMerged Fruits & Vegetables:");
console.log(mergedArray);



const animals = ["lion", "tiger", "bear", ...vegetables1];
console.log("\nAnimals Array:");
console.log(animals);



// ===============================
// Spread Operator (Objects)
// ===============================
const fruitObj = {
  name: "apple",
  color: "red",
  price: 10,
  quantity: 5
};

const vegetableObj = {
  name: "carrot",
  color: "orange",
  price: 5,
  quantity: 10
};

const mergedObj = { ...fruitObj, ...vegetableObj };
console.log("\nMerged Objects:");
console.log(mergedObj);



// ===============================
// Rest Operator
// ===============================
const multiAddUsingRest = (...params) =>
  params.reduce((sum, value) => sum + value, 0);

console.log("\nRest Operator (Sum):");
console.log(multiAddUsingRest(1,2,3,4,5,6,7,8,9,10,11,12,13,14));


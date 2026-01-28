/*Task 10 – Merge and Destructure Objects
 Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.*/

// 1. Create the two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 2. Merge them into a new object using spread (...)
const mergedObj = { ...obj1, ...obj2 };

// 3. Destructure to extract 'a' and 'd'
const { a, d } = mergedObj;

// 4. Log the results
console.log(a); // Output: 1
console.log(d); // Output: 4
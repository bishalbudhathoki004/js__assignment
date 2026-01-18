/*Task 5 – Object Destructuring
 Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.*/

 // 1. Create the person object
const person = {
  name: "Bishal Budhathoki",
  age: 20,
  country: "Nepal"
};

// 2. Destructure name and country
const { name, country } = person;

// 3. Log the variables
console.log(name);    // Output: Bishal Budhathoki
console.log(country); // Output: Nepal
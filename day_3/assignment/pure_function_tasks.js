// 1. Multiply two numbers
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5)); // Output: 20


// 2. Get full name
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("Dipak", "Shrestha")); 
// Output: Dipak Shrestha


// 3. Check if number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10)); 
// Output: true


// 4. Capitalize first letter
function capitalize(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("hello")); 
// Output: Hello


// 5. Calculate area of a circle
function calculateArea(radius) {
  return 3.14 * radius * radius;
}
console.log(calculateArea(5)); 
// Output: 78.5


// 6. Get initials
function getInitials(firstName, lastName) {
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
}
console.log(getInitials("Dipak", "Shrestha")); 
// Output: D.S.


// 7. Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(68)); 
// Output: 20


// 8. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); 
// Output: olleh


// 9. Find maximum number in an array
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 7, 2, 9, 5])); 
// Output: 9


// 10. Format date as DD/MM/YYYY
function formatDate(year, month, day) {
  const dd = String(day).padStart(2, "0");
  const mm = String(month).padStart(2, "0");
  return `${dd}/${mm}/${year}`;
}
console.log(formatDate(2026, 1, 7)); 
// Output: 07/01/2026

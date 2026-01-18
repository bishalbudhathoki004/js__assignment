// 1. map – double all numbers
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(num => num * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10]


// 2. filter – get all even numbers
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens);
// Output: [2, 4, 6]


// 3. reduce – calculate sum
const numbers3 = [10, 20, 30, 40];
const sum = numbers3.reduce((total, num) => total + num, 0);
console.log(sum);
// Output: 100


// 4. find – first user with age > 18
const users1 = [
  { name: "Ram", age: 16 },
  { name: "Sita", age: 19 },
  { name: "Hari", age: 22 }
];

const adultUser = users1.find(user => user.age > 18);
console.log(adultUser);
// Output: { name: "Sita", age: 19 }


// 5. forEach – log element with index
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});
/*
Output:
0: apple
1: banana
2: orange
*/


// 6. map – extract only names
const users2 = [
  { name: "Dipak", age: 25 },
  { name: "Anil", age: 30 },
  { name: "Rita", age: 22 }
];

const names = users2.map(user => user.name);
console.log(names);
// Output: ["Dipak", "Anil", "Rita"]


// 7. filter – products with price < 100
const products = [
  { name: "Pen", price: 20 },
  { name: "Notebook", price: 120 },
  { name: "Pencil", price: 10 }
];

const cheapProducts = products.filter(product => product.price < 100);
console.log(cheapProducts);
// Output: [{ name: "Pen", price: 20 }, { name: "Pencil", price: 10 }]


// 8. reduce – find maximum value
const numbers4 = [5, 12, 8, 20, 3];
const maxValue = numbers4.reduce((max, num) => {
  return num > max ? num : max;
}, numbers4[0]);

console.log(maxValue);
// Output: 20


// 9. map + filter – names of adults in uppercase
const users3 = [
  { name: "Ram", age: 17 },
  { name: "Sita", age: 19 },
  { name: "Hari", age: 21 }
];

const adultNamesUppercase = users3
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());

console.log(adultNamesUppercase);
// Output: ["SITA", "HARI"]


// 10. forEach – build HTML unordered list
const items = ["Home", "About", "Contact"];
let htmlList = "<ul>";

items.forEach(item => {
  htmlList += `<li>${item}</li>`;
});

htmlList += "</ul>";
console.log(htmlList);

/*
Output:
<ul>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
*/

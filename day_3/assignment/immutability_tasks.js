// 1. Update object's age immutably
const person1 = { name: "Matina", age: 25 };
const updatedPerson1 = { ...person1, age: 26 };

console.log(updatedPerson1);
// Output: { name: "Matina", age: 26 }

// 2. Add a new hobby immutably
const person2 = {
  name: "Matina",
  hobbies: ["Reading", "Coding"]
};

const updatedPerson2 = {
  ...person2,
  hobbies: [...person2.hobbies, "Traveling"]
};

console.log(updatedPerson2);
// Output: { name: "Matina", hobbies: ["Reading", "Coding", "Traveling"] }


// 3. Remove last element from array immutably
const arr1 = [1, 2, 3, 4];
const newArr1 = arr1.slice(0, -1);

console.log(newArr1);
// Output: [1, 2, 3]


// 4. Replace second element immutably
const arr2 = ["Apple", "Banana", "Orange"];
const newArr2 = [
  arr2[0],
  "Mango",
  ...arr2.slice(2)
];

console.log(newArr2);
// Output: ["Apple", "Mango", "Orange"]


// 5. Change nested property immutably
const user = {
  name: "Ram",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};

const updatedUser = {
  ...user,
  address: {
    ...user.address,
    city: "Pokhara"
  }
};

console.log(updatedUser);
// Output: city changed to Pokhara


// 6. Add new key-value pair immutably
const settings = { theme: "dark", language: "en" };
const updatedSettings = { ...settings, notifications: true };

console.log(updatedSettings);
// Output: { theme: "dark", language: "en", notifications: true }


// 7. Remove a property immutably
const record = {
  id: 1,
  name: "Post",
  deletedAt: "2025-01-01"
};

const { deletedAt, ...cleanRecord } = record;

console.log(cleanRecord);
// Output: { id: 1, name: "Post" }


// 8. Merge two arrays immutably
const arrA = [1, 2];
const arrB = [3, 4];

const mergedArray = [...arrA, ...arrB];
console.log(mergedArray);
// Output: [1, 2, 3, 4]


// 9. Merge two objects immutably
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);
// Output: { a: 1, b: 3, c: 4 }


// 10. Update object in array immutably (by id)
const users = [
  { id: 1, name: "Ram", age: 20 },
  { id: 2, name: "Sita", age: 22 }
];

const updatedUsers = users.map(user =>
  user.id === 2 ? { ...user, age: 23 } : user
);

console.log(updatedUsers);
/*
Output:
[
  { id: 1, name: "Ram", age: 20 },
  { id: 2, name: "Sita", age: 23 }
]
*/

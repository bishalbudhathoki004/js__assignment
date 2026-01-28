/*Task 2 – let and const Scope
 Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.*/

// 1. A block with let
{
  let dog = "Rex";
}
console.log(dog); //  Error: dog is not defined

// 2. A block with const
{
  const cat = "Luna";
}
console.log(cat); // Error: cat is not defined
/*Task 8 – Rest Operator (Sum of Numbers)
 Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.*/

const sumAll = (...numbers)=> numbers.reduce((a,b)=> a+b);
console.log(sumAll(1,2,3,4));
// 1. repeat(action, times)
function repeat(action, times) {
  for (let i = 0; i < times; i++) {
    action();
  }
}

repeat(() => console.log("Hello"), 3);
/*
Output:
Hello
Hello
Hello
*/


// 2. operate(arr, fn) using map
function operate(arr, fn) {
  return arr.map(fn);
}

const nums1 = [1, 2, 3];
console.log(operate(nums1, n => n * 2));
// Output: [2, 4, 6]


// 3. filterBy(arr, conditionFn)
function filterBy(arr, conditionFn) {
  return arr.filter(conditionFn);
}

const nums2 = [1, 2, 3, 4, 5];
console.log(filterBy(nums2, n => n % 2 === 0));
// Output: [2, 4]


// 4. logger(fn)
function logger(fn) {
  return function (...args) {
    console.log("before");
    const result = fn(...args);
    console.log("after");
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = logger(add);

console.log(loggedAdd(2, 3));
/*
Output:
before
after
5
*/


// 5. createAdder(x)
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = createAdder(5);
console.log(addFive(10));
// Output: 15


// 6. sortBy(arr, key)
function sortBy(arr, key) {
  return [...arr].sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  });
}

const people = [
  { name: "Ram", age: 30 },
  { name: "Sita", age: 25 },
  { name: "Hari", age: 35 }
];

console.log(sortBy(people, "age"));
/*
Output: sorted by age
*/


// 7. pipeline(...functions)
function pipeline(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  };
}

const double = n => n * 2;
const square = n => n * n;

const doubleThenSquare = pipeline(double, square);
console.log(doubleThenSquare(3));
// Output: 36


// 8. withTax(taxRate)
function withTax(taxRate) {
  return function (price) {
    return price + price * taxRate;
  };
}

const addVAT = withTax(0.13);
console.log(addVAT(100));
// Output: 113


// 9. debounce(fn, delay) – basic version
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const debouncedLog = debounce(() => console.log("Debounced!"), 1000);
debouncedLog();
debouncedLog();
debouncedLog();
// Output (after 1 second): Debounced!


// 10. memoize(fn)
function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (cache[arg] !== undefined) {
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const slowSquare = n => {
  console.log("Calculating...");
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(4));
// Calculating...
// Output: 16

console.log(memoizedSquare(4));
// Output: 16 (from cache, no "Calculating...")

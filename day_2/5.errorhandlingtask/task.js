//try using an undefined function to generate error
try {
  notDefinedFunction();
} catch (error) {
  console.log("Error caught:", error.message);
}

//divide by zero error handling
try {
  const result = 10 / 0;

  if (!isFinite(result)) {
    throw new Error("Division by zero");
  }

  console.log(result);
} catch (error) {
  console.log(error.message);
}

//use custom error
try {
  throw new Error("This is a custom error message");
} catch (error) {
  console.log(error.message);
}
//throw error manually
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older");
  }
  return "Access granted";
}

try {
  checkAge(16);
} catch (error) {
  console.log(error.message);
}

//create function with try catch 
function parseNumber(value) {
  try {
    return Number(value);
  } catch (error) {
    return "Invalid number";
  }
}

console.log(parseNumber("123"));
//multiple catch messages
try {
  JSON.parse("{bad json}");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Syntax error in JSON");
  } else {
    console.log("Unknown error");
  }
}

//use finally
try {
  console.log("Trying...");
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Caught error");
} finally {
  console.log("This always runs");
}

//try json.parse with error handling
try {
  JSON.parse('{"name": "Alice"'); // missing }
} catch (error) {
  console.log("Invalid JSON");
}

//catch error and log name
try {
  undefinedVariable;
} catch (error) {
  console.log(error.name); // ReferenceError
}

//use try catch in async function
async function fetchData() {
  try {
    const response = await fetch("https://invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Async error:", error.message);
  }
}

fetchData();


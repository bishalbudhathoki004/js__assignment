/*Task 2 — “this” losing context
Create a button click example (even if simulated) where calling a method loses this, then fix it using .bind(this)
Goal: experience the common UI bug*/

const user = {
  name: "Bishal",
  login: function() {
    console.log(`Welcome, ${this.name}!`);
  }
};

// --- THE BUG ---
// We simulate a button click by passing the function as a callback
// After 1 second, this will print: "Welcome, undefined!"
setTimeout(user.login, 1000); 

// --- THE FIX: .bind() ---
// .bind() creates a NEW function where 'this' is permanently locked to 'user'
const fixedLogin = user.login.bind(user);

// Now it works! Prints: "Welcome, Bishal!"
setTimeout(fixedLogin, 1000);
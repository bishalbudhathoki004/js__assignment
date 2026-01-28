/*Task 1 — “this” inside an object method
Create a user object that has name and login() method.
 Inside login(), print the username using this.name.
Goal: understand object method context */

// Create the user object
const user = {
  name: "Bishal",
  
  // Define the login method
  login: function() {
    // 'this' refers to the 'user' object
    console.log(`User logged in: ${this.name}`);
  }
};

// Call the method
user.login(); // Output: User logged in: Bishal
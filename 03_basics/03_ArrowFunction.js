// This explains the behavior of 'this' in JavaScript, focusing on how it works in different contexts

// In an object, 'this' refers to the object itself
const user = {
    username: "Musaddique",   // Property of the object
    follower: 10982,           // Property of the object

    // Method inside the object, using 'this' to access object properties
    welcomeMessage: function() {
        // 'this' refers to the 'user' object, so this.username accesses the 'username' property
        console.log(`${this.username}, Welcome to the website`);
    }
};

// Calling the method of the object. 'this' inside 'welcomeMessage' refers to the 'user' object.
user.welcomeMessage();  // Outputs: "Musaddique, Welcome to the website"

// Changing the 'username' property of the object
user.username = "Huzaifa";

// Calling the method again after changing the username. 'this' still refers to the 'user' object.
user.welcomeMessage();  // Outputs: "Huzaifa, Welcome to the website"

// Function `chai` using regular function syntax
function chai() {
    // In a regular function, 'this' refers to the global object (or undefined in strict mode)
    console.log(this);  // In the browser, 'this' refers to the global object (window)
}

// Calling 'chai'. 'this' refers to the global object, so you'll see the global object in the console
chai(); // In a browser, this will log the 'window' object (or 'global' in Node.js)

// Regular function expression example (with 'this' behaving differently)
const chai1 = function() {
    let username = "musaddique";
    // 'this' in a regular function refers to the global object in non-strict mode (or undefined in strict mode)
    console.log(this.username); // Will print undefined since 'this' does not have a 'username' property in the global scope
};

// Calling chai1 will output undefined, since 'this' doesn't have a 'username' property in the global context.
chai1(); // Outputs: undefined

// Arrow function example (Arrow functions do not have their own 'this')
const chai2 = () => {
    let username = "musaddique";
    // 'this' inside an arrow function refers to the surrounding context (in this case, the global context)
    console.log(this.username); // Will print undefined since arrow functions do not bind their own 'this'
};

// Calling chai2 will output undefined, because 'this' in arrow functions is lexically inherited from the surrounding scope
chai2(); // Outputs: undefined

// Arrow functions example: adding two numbers
const addTwo = (num1, num2) => {
    return num1 + num2; // 'this' is not used here, but this is how an arrow function works
};
console.log(addTwo(5, 6));  // Outputs: 11

// Implicit return in arrow functions: we can skip the 'return' keyword if the body has a single expression
const addTwoo = (num1, num2) => num1 + num2;  // Implicit return
console.log(addTwoo(4, 6));  // Outputs: 10

// Note: 
// 1. If we use curly braces `{}`, we must explicitly use 'return' to return a value from the function.
// 2. If we use parentheses `()`, the result of the expression is implicitly returned, so no need to write 'return' explicitly.
  
// Example of returning an object from an arrow function (must wrap in parentheses to avoid ambiguity)
const createObject = () => ({ name: "John", age: 30 });  // Object is returned implicitly
console.log(createObject());  // Outputs: { name: "John", age: 30 }

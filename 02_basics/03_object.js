/* A singleton in JavaScript refers to a design pattern that ensures a class has only one instance 
   and provides a global point of access to that instance. Essentially, it's a way to create a single, 
   shared object that can be used throughout an application. */

// Creating a Symbol
const mySym = Symbol("key1");  // A Symbol is a unique and immutable primitive value used as a key for object properties

// Creating an object using object literals
const JsUser = {
    name: "Musaddique",  // Simple property with a string value
    [mySym]: "myKey1",  // Using Symbol as a key to create a unique property for the object
    age: 21,  // Simple number property
    location: "ratnagiri",  // String value for location
    gmail: "khan@gmail.com",  // Email property (can be updated)
    isLoggedIn: false,  // Boolean to track if the user is logged in or not
    lastLoginDays: ["Monday", "Tuesday"]  // Array of days user logged in
};

// Logs the whole JsUser object
console.log(JsUser);

// Accessing properties using dot notation
console.log(JsUser.name);  // Logs the value of 'name' property (Musaddique)

// Accessing properties using bracket notation (alternative way)
console.log(JsUser["name"]);  // Logs the value of 'name' property (Musaddique)

// Accessing Symbol property using bracket notation
console.log(JsUser[mySym]);  // Logs 'myKey1', accessing the property created with a symbol

// Updating the value of the 'gmail' property
JsUser.gmail = "khanmusaddique48@gmail.com";  // Changing the email to a new value
console.log(JsUser);  // Logs the updated JsUser object with the new email

// Uncommenting Object.freeze will make the object immutable (no further changes allowed)
Object.freeze(JsUser);  // This would prevent any further modifications to the object

// Adding a new function (method) to the object JsUser
JsUser.greeting = function(){
    console.log(`Hello ${this.name}`);  // This function logs a greeting using the 'name' property
}

// Calling the greeting function
console.log(JsUser.greeting());  // Logs: Hello Musaddique, calling the function and logging the output

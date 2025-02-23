// SCOPE STARTS WITH KEYWORD let, var, const

let a = 10;     // 'let' declares a variable with block scope
const b = 20;   // 'const' declares a constant with block scope
var c = 40;     // 'var' declares a variable with global or function scope

// These variables are accessible from the global scope
console.log(a);  // Outputs: 10
console.log(b);  // Outputs: 20
console.log(c);  // Outputs: 40

// {} => THIS IS CALLED SCOPE WHEN IT COMES WITH FUNCTION or if-else THEN IT IS CALLED BLOCK SCOPE.

// Global Scope Example
// In this case, 'a', 'b', and 'c' are all declared in the global scope and can be accessed globally throughout the code.

if (true) {
    let x = 50;   // 'x' is block-scoped to the if statement
    const y = 60; // 'y' is block-scoped to the if statement
    var z = 70;   // 'z' is function-scoped (or global if not in a function)
    console.log(x); // Accessible inside the block, Outputs: 50
    console.log(y); // Accessible inside the block, Outputs: 60
    console.log(z); // Accessible inside the block, Outputs: 70
}

console.log(z);  // 'z' is accessible here, Outputs: 70 because it is not block-scoped
// console.log(x); // Error: x is not defined because it is block-scoped
// console.log(y); // Error: y is not defined because it is block-scoped

// Block Scope: variables declared with 'let' and 'const' are limited to the block they are declared in (inside {}).

// NESTED SCOPE Example

function one() {
    const username = "Musaddique";  // This variable is scoped to function 'one'

    // Nested function 'two' is defined within 'one', so it can access variables declared in 'one'
    function two() {
        const website = "youtube";   // This variable is scoped to function 'two'
        console.log(username);       // 'username' is accessible here because it is in the outer scope of 'one'
        console.log(website);        // 'website' is accessible here because it is declared in the same function 'two'
    }

    two();  // Calling 'two' inside 'one' will work because 'two' is nested within 'one'
}

// Calling 'one' will invoke 'two', and we will see both 'username' and 'website' printed
one(); // Outputs: "Musaddique" and "youtube"

// Nested Scope:
 // In a **nested scope**, an inner function can access variables from the outer function, but not the other way around.
 // Here, 'two' can access 'username' from 'one', but 'one' cannot access 'website' from 'two' because 'website' is scoped to 'two'.

// Example of trying to access outer function variable from inner function (scope chain)
function outerFunction() {
    let outerVar = "I'm outer";
    function innerFunction() {
        console.log(outerVar);  // 'outerVar' is accessible because innerFunction is inside outerFunction
    }
    innerFunction(); // Works fine and outputs: "I'm outer"
}

outerFunction();

// Example of accessing inner function variable outside its scope
// console.log(innerVar); // Error: innerVar is not defined, because it's scoped to the innerFunction

// IF Statement Example

// Example 1: Simple IF-Else Statement
const temp = 41;

if(temp < 50){
    console.log("Temp is less than 50"); // Executes if temp is less than 50
}else{
    console.log("Temp is greater than 50"); // Executes if temp is greater than or equal to 50
}

// Example 2: Variable scope in an IF statement
const score = 200;
if(score > 100){
    const power = "fly"; // 'power' is declared inside the block, so it's only accessible inside this block
    console.log(`The power is ${power}`);
}
// console.log(`The power is ${power}`); // This line would cause an error because `power` is not accessible outside the IF block due to its block scope (const).

// Example 3: Implicit scope for a single line statement
const balancee = 1000;
if(balancee > 500) console.log("Hurray!!!"); // Implicit scope - no need for braces if the code only takes one line

// Example 4: Nested IF-Else Statement
const balance = 1000;

if (balance < 600) {
    console.log("Less Than 500"); 
} else if (balance < 750) {
    console.log("Less Than 750"); 
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Greater than or equal to 900");
}

// Example 5: Using multiple conditions with logical operators
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// If user is logged in, has debit card, and some other condition (2==3) which is false
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // This block will NOT execute because 2==3 is false
}

// If the user is logged in either via Google or Email
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Executes if either loggedInFromGoogle or loggedInFromEmail is true
}

// Operators used in conditions
// Comparison Operators:
// <   -> Less Than
// >   -> Greater Than
// <=  -> Less Than or Equal To
// >=  -> Greater Than or Equal To
// ==  -> Checks if the value is equal to (but does not check data types)
// !=  -> Checks if the values are not equal to (does not check data types)
// === -> Strict Equality (checks both value and data type)
// !== -> Strict Inequality (checks both value and data type)

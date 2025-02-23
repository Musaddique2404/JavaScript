// Function to print the letters of a name (K, H, A, N)
function sayName(){
    console.log("K"); // Prints "K"
    console.log("H"); // Prints "H"
    console.log("A"); // Prints "A"
    console.log("N"); // Prints "N"
}
sayName(); // Call the function to execute and print the name

// Function that adds two numbers and prints the result
function addTwoNumbers(number1, number2){ 
    console.log(number1 + number2); // Adds the two numbers and prints the result
}
addTwoNumbers(5, 4);  // 5,4 are arguments passed to the function (numbers being added)

// Function that adds two numbers and returns the result
function addNumbers(number1, number2){
    let result = number1 + number2; // Stores the sum of the numbers in 'result' variable
    return result; // Returns the result to the calling code
}
const result = addNumbers(5, 8); // Calls the function and stores the returned value in 'result'
console.log("Result :", result); // Prints the result (13 in this case)

// Function that checks if the username is provided and prints a message
function loginUserMessage(username){
    if(username === undefined){ // If no username is provided
        console.log("Please enter a username"); // Prompts the user to enter a username
        return; // Stops the function execution if no username
    }
    return `${username} just logged in`; // Returns a login message if username is provided
}
console.log(loginUserMessage("abc")); // Calls the function with the username "abc" and prints the result

// Function that uses the rest parameter to accept a variable number of arguments
// '...num1' is a rest parameter, which collects all passed arguments into an array
function calculateCartPrice(...num1){
    return num1; // Returns the array of arguments
}
console.log(calculateCartPrice(2, 7, 8)); // Prints the array of numbers passed to the function

// Function that accepts an object as a parameter and logs specific properties from it
const user = {
    username: "Musaddique",
    follower: 199,
}

// Function that handles an object and prints the 'username' and 'follower' properties
function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and the followers are ${anyObject.follower}.`);
}
handleObject(user); // Calls the function with 'user' object and prints the details (username and follower count)

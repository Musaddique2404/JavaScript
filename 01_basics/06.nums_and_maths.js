// NUMS

const score = 400  // Declaring a constant variable 'score' and assigning it a numeric value
console.log(score); // Prints the value of 'score' to the console

const balance = new Number(12345678) // Creating a Number object with a value of 12345678
console.log(balance) // Prints the Number object 'balance'

const myName = new String("MusaddiqueKhan") // Creating a String object with the given name
console.log(myName) // Prints the String object 'myName'

console.log(balance.toString().length); // Converts 'balance' to a string and prints its length
console.log(balance.toFixed(1)) // Formats 'balance' to one decimal place and prints it

const otherNumber = 22.7262 
console.log(otherNumber.toPrecision(3)) // Formats 'otherNumber' to 3 significant figures and prints it

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Formats 'hundreds' with Indian number formatting (e.g., 10,00,000)

// Maths

console.log(Math.abs(-4)); // Returns the absolute value of -4 (which is 4)
console.log(Math.round(4.76)); // Rounds 4.76 to the nearest integer (5)
console.log(Math.floor(4.88)); // Rounds 4.88 down to the nearest integer (4)
console.log(Math.min(-4,5,4,3,6,5)); // Returns the minimum value in the given list (-4)
console.log(Math.max(-4,5,4,3,6,5)); // Returns the maximum value in the given list (6)

console.log(Math.floor(Math.random() * 10) + 1) 
// Generates a random number between 1 and 10 (inclusive) by multiplying Math.random() (0-0.999) by 10, flooring it, and adding 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
// Generates a random number between min (10) and max (20) by calculating a range and flooring it

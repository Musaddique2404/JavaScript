// Primitive Data Types 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number type
const scoreValue = 100.3 // Number type (floating point)

const isLoggedIn = false // Boolean type
const outsideTemp = null // Null type (empty or intentional absence of value)
let userEmail; // Undefined type (variable declared but not assigned a value)

const id = Symbol('123') // Symbol type (unique identifier)
const anotherId = Symbol('123') // Another unique Symbol, even if value looks the same

console.log(id === anotherId); // false, because Symbols are always unique

// const bigNumber = 3456543576654356754n // BigInt type (used for large integers)

// Reference (Non-Primitive) Data Types

// Arrays, Objects, and Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array (used to store multiple values)

let myObj = {
    name: "hitesh", // Object with key-value pairs
    age: 22,
}

const myFunction = function(){
    console.log("Hello world"); // Function (a block of reusable code)
}

console.log(typeof anotherId); // Checking the type of Symbol

// More details on JavaScript types: https://262.ecma-international.org/5.1/#sec-11.4.3

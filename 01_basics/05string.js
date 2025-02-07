const name = "Musaddique khan"
const surname = " khan"

console.log(name + surname); // Concatenating two strings using the '+' operator

console.log(`My first name is ${name.toUpperCase()} and my surname is ${surname}.`); 
// Using template literals and converting name to uppercase

const myName = new String('Musaddique-khan')
console.log(myName.__proto__) // Accessing the prototype of the String object

console.log(myName.toUpperCase()) // Converting the string to uppercase

console.log(myName.charAt(8)) // Fetching the character at index 8

console.log(myName.indexOf('M')) // Finding the index of character 'M'

const newName = myName.substring(0,4) 
console.log(newName) // Extracting a substring from index 0 to 4 (excluding 4)

const anotherName = myName.slice(0, 6)
console.log(anotherName) // Slicing the string from index 0 to 6

const yetanotherName = myName.slice(-15, 9) 
console.log(yetanotherName) // Using negative indexing to slice from -15 to index 9

const newStringOne = "       Musaddique        "
console.log(newStringOne) // Printing string with spaces
console.log(newStringOne.trim()) // Removing leading and trailing spaces

const url = "http://musaddique.com/Musaddique%20khan"
console.log(url) 
console.log(url.replace('%20','-')) // Replacing '%20' with '-'
console.log(url.includes('Musaddique')); // Checking if 'Musaddique' exists in the URL
console.log(url.includes('abc')); // Checking if 'abc' exists in the URL

const hello = new String('Hello-Good-Morning-Musaddique')
console.log(hello.split('-')); // Splitting the string into an array using '-' as a delimiter

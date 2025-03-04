// For-of Loop Example

// Common situation 1: Iterating over an array of numbers
const arr = [1, 2, 3, 4, 5];

// Using 'for-of' to loop through the array and log each number
for (const num of arr) {
    console.log(num);  // Logs each element in the array (1, 2, 3, 4, 5)
}

// Common situation 2: Iterating over a string (which is also an iterable)
const greatings = "Hello World";

// Using 'for-of' to loop through each character of the string and log it
for (const greets of greatings) {
    console.log(greets);  // Logs each character in the string one by one
}

// Map Example

// Create a new Map object
const map = new Map();

// Setting key-value pairs in the map
map.set('IN', "India");  // Key 'IN' with value 'India'
map.set('USA', "United States of America");  // Key 'USA' with value 'United States of America'
map.set('Fr', "France");  // Key 'Fr' with value 'France'

// Logging the entire map object
console.log(map);  // Prints the map with its key-value pairs

// Using 'for-of' to iterate through each entry (key-value pair) in the map
for (const [key, value] of map) {
    console.log(key, ':', value);  // Logs the key followed by its corresponding value
}

// Array Initialization
const myArr = [0, 1, 2, 3, 4, 5];  // An array of numbers
const myHeors = ["shaktiman", "naagraj"];  // An array of strings (heroes)

const myArr2 = new Array(1, 2, 3, 4);  // Creating an array using the Array constructor
console.log(myArr[1]);  // Logs the element at index 1, which is '1'

// Array methods

// Adding elements to the end of the array using push()
myArr.push(6);  // Adds 6 to the end of the array
myArr.push(7);  // Adds 7 to the end of the array

// Removing the last element of the array using pop()
myArr.pop();  // Removes the last element (7) from the array

// Adding elements to the beginning of the array using unshift()
myArr.unshift(9);  // Adds 9 to the beginning of the array

// Removing the first element of the array using shift()
myArr.shift();  // Removes the first element (9) from the array

// Checking if an element exists in the array using includes()
console.log(myArr.includes(9));  // Returns false because 9 was removed

// Finding the index of an element using indexOf()
console.log(myArr.indexOf(3));  // Returns 2, the index of the element 3

// Joining array elements into a string using join()
const newArr = myArr.join();  // Converts the array into a comma-separated string

console.log(myArr);  // Logs the modified array
console.log(newArr);  // Logs the array as a string


// slice, splice

console.log("A ", myArr);  // Logs the array before slice and splice operations

// slice() creates a shallow copy of a portion of the array without modifying the original
const myn1 = myArr.slice(1, 3);  // Extracts elements from index 1 to 2 (3 is not included)
console.log(myn1);  // Logs the new array: [1, 2]
console.log("B ", myArr);  // Logs the original array after slice, it remains unchanged

// splice() changes the original array by adding or removing elements
const myn2 = myArr.splice(1, 3);  // Removes 3 elements starting at index 1
console.log("C ", myArr);  // Logs the modified array: [0, 4, 5]
console.log(myn2);  // Logs the removed elements: [1, 2, 3]

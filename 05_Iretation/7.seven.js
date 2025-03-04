// Example 1: Adding 10 to each number using `map()`
const myNumebrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// `map()` creates a new array by applying the given function to each element
const newNums = myNumebrs.map((num) => num + 10);  // Adds 10 to each number
console.log(newNums);  // Expected Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Example 2: Chaining `map()` and `filter()` to transform and filter the numbers
const myNumebrs1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First `map()`: Multiply each number by 10
// Second `map()`: Add 1 to each number
// `filter()`: Keep only numbers greater than or equal to 40
const newNums1 = myNumebrs1
  .map((num) => num * 10)      // Multiply each number by 10
  .map((num) => num + 1)       // Add 1 to each number
  .filter((num) => num >= 40); // Filter out numbers less than 40

console.log(newNums1);  // Expected Output: [41, 51, 61, 71, 81, 91, 101, 111, 121, 131]

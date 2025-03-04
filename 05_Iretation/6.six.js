// Example 1: Using `forEach` - Note that `forEach` does not return a value
const coding = ["js", "ruby", "java", "python", "cpp"];
const value = coding.forEach((item) => {
    console.log(item);  // Logs each item in the array
    return item;        // This return is ignored by `forEach`, since it doesn't return anything
});
console.log(value);     // Outputs `undefined` because `forEach` does not return anything

// Example 2: Using `filter` to create a new array with numbers greater than 5
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 5); // Filters out numbers greater than 5
console.log(newNums); // Expected Output: [6, 7, 8, 9, 10]

// Example 3: Using `filter` with a block body (explicit return) for numbers greater than 8
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums1 = myNums1.filter((num) => { // Filter numbers greater than 8
   return num > 8; // Explicit return statement
});
console.log(newNums1); // Expected Output: [9, 10]

// Example 4: Using `forEach` to manually filter and store values in a new array
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums2 = []; // Empty array to store the filtered numbers

myNums2.forEach((num) => {
  if (num > 8) {         // Checks if the number is greater than 8
    newNums2.push(num);  // If condition is met, push the number into the new array
  }
});

console.log(newNums2); // Expected Output: [9, 10]

// Example 5: Filtering an array of objects (books) by genre and edition
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books by the 'History' genre
let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks); 
// Expected Output: [ 
// { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
// { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
// ]

// Filtering books where edition is greater than 2000
let userBooks1 = books.filter((bk1) => {
    return bk1.edition > 2000; // Filters books with edition greater than 2000
});
console.log(userBooks1);
// Expected Output: [ 
// { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
// { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
// { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
// { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
// { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
// ]

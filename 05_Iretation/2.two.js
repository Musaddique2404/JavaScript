// Initialize the index variable to 0
let index = 0;
// Start a while loop that will run as long as index is less than or equal to 10
while (index <= 10) {
    // Log the current value of index
    console.log(`value of index is ${index}`);
    // Increase the value of index by 2 after each iteration
    index += 2;
}

// Create an array of superhero names
let myArr = ['Flash','Batman','Spiderman']
// Initialize a variable arr to 0, which will be used to access each element of the array
let arr = 0;
// Start a while loop to iterate over the array
while (arr < myArr.length) {
    // Log the current value at position arr in the myArr array
    console.log(`Value is ${myArr[arr]}`);
    // Increase arr by 1 to move to the next element in the array
    arr += 1;
}

// Initialize score variable to 11
let score = 1;
// Start a do-while loop that will run at least once before checking the condition
do {
    // Log the current value of score
    console.log(`Score is ${score}`);
    // Increase the score by 1 after each iteration
    score++
} while (score <= 10);  // The loop will stop because score is now greater than 10

// ForEach Loop: A method for iterating over arrays. 
// It executes a provided function once for each array element.

const coding = ["js", "ruby", "python", "swift", "c++"];

// Using 'forEach' with a traditional function expression
coding.forEach(function (code) {
    // Logs each element (language) in the array
    console.log(code);
});

// Using 'forEach' with an arrow function (concise syntax)
coding.forEach((item) => {
    // Logs each element (language) in the array
    console.log(item);
});

// Using 'forEach' with an external function
function printMe(items) {
    // Logs the individual items (languages) in the array
    console.log(items);
}
coding.forEach(printMe);  // Calls the 'printMe' function for each array element

// Using 'forEach' with a function that accepts 3 parameters: value, index, and the array itself
coding.forEach((value, index, arr) => {
    // Logs the value, index, and the entire array in each iteration
    console.log(value, index, arr);
});

// Example with an array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

// Using 'forEach' to iterate over an array of objects and log specific properties (languageName)
myCoding.forEach((item) => {
    // Logs the 'languageName' property from each object in the array
    console.log(item.languageName);
});

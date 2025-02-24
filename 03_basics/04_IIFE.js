(function chai() {
    // Named Immediately Invoked Function Expression (IIFE)
    // The function is named 'chai' and is immediately invoked after declaration
    console.log(`DB is connected`); // Logs a message indicating database connection
})();

((name) => {
    // Anonymous Immediately Invoked Function Expression (IIFE)
    // An anonymous function is defined and invoked immediately, passing 'name' as a parameter
    console.log(`My name is : ${name}`); // Logs the name passed to the IIFE
})("MusaddiqueKhan"); // Passing the string "MusaddiqueKhan" as an argument to the function

// Note: If you write two IIFEs in sequence, you should add a semi-colon 
// after the first IIFE to avoid potential syntax issues, as JavaScript 
// might treat the start of the second IIFE as a continuation of the first one.

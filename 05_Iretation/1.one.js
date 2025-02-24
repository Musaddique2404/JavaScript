// Example of a basic for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // If element equals 5, log this special message
        console.log("5 is the best number");
    }
    // Log the current element value
    console.log(element);
}

// Nested for loop: outer loop runs from 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    // Inner loop runs from 0 to 9
    for (let j = 0; j < 10; j++) {
        // Logs the multiplication of i and j
        console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Looping through an array
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length); // Logs the length of the array
// Loop to go through each element of the array
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // Logs each element of the array
    console.log(element);
}

// Example of break: loop will stop when i is 5
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // Once i reaches 5, break the loop and exit
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}

// Example of continue: skips logging when i is 5 but continues the loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // When i is 5, skip this iteration and continue with the next
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}

// Creating a new Date object representing the current date and time
let myDate = new Date()

// Logging different representations of the date
console.log(myDate.toString()); // Full date-time string
console.log(myDate.toDateString()); // Returns only the date part in a readable format
console.log(myDate.toLocaleString()); // Returns date and time based on local settings
console.log(typeof myDate); // Checking the type of 'myDate' (object)

// Creating different Date objects with various formats

let myCreatedDate0 = new Date(2023, 0, 23) // Creating a date for January 23, 2023 (Month is 0-based)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) // Adding time (5:03 AM) to the date
let myCreatedDate2 = new Date("2023-01-14") // Creating a date from a string in YYYY-MM-DD format
let myCreatedDate3 = new Date("01-14-2023") // Creating a date from MM-DD-YYYY format

console.log(myCreatedDate1.toLocaleString()); // Printing the date in a locale-specific format

// Getting the current timestamp (milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now()

console.log(myTimeStamp); // Printing the current timestamp
console.log(myCreatedDate1.getTime()); // Getting the timestamp of 'myCreatedDate'
console.log(Math.floor(Date.now()/1000)); // Converting milliseconds to seconds by dividing by 1000

// Creating another Date object representing the current date
let newDate = new Date()

console.log(newDate); // Printing the full current date-time
console.log(newDate.getMonth() + 1); // Getting the current month (Adding 1 since months are 0-based)
console.log(newDate.getDay()); // Getting the current day of the week (0 for Sunday, 6 for Saturday)

// String interpolation example (though it's not being used in console)
`${newDate.getDay()} and the time `

// Formatting the date to get only the weekday name
newDate.toLocaleString('default', {
    weekday: "long",
})

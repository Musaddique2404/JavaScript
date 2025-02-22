// Creating a new empty object using the Object constructor
const tinderUser = new Object();  // Using the Object constructor to create an empty object

// Adding properties to the tinderUser object
tinderUser.id = "1266";  // Adding the 'id' property with value "1266"
tinderUser.name = "Musaddique";  // Adding the 'name' property with value "Musaddique"
tinderUser.isLoggedIn = false;  // Adding the 'isLoggedIn' property with value false (indicating the user is not logged in)

// Logging the tinderUser object to the console
console.log(tinderUser);  // Logs the whole tinderUser object: { id: "1266", name: "Musaddique", isLoggedIn: false }

// Creating a regular object with nested objects
const regularUser = {
    email: "some@gmail.com",  // Adding an 'email' property
    fullName: {  // 'fullName' is an object containing another object 'userfullname'
        userfullname: {
            firstName: "Musaddique",  // Adding 'firstName' inside 'userfullname'
            lastName: "Khan"  // Adding 'lastName' inside 'userfullname'
        }
    }
};

// Accessing the nested 'firstName' property and logging it to the console
console.log(regularUser.fullName.userfullname.firstName);  // Logs: "Musaddique" (accessing the 'firstName' inside the nested 'userfullname')

// Creating two objects with numeric keys and string values
const obj1 = {1: "a", 2: "b"};  // Object with numeric keys (1, 2) and string values ("a", "b")
const obj2 = {3: "a", 4: "b"};  // Another object with numeric keys (3, 4) and string values ("a", "b")

// Merging obj1 and obj2 into a new object using Object.assign()
const stObj = Object.assign({}, obj1, obj2);  // Merges obj1 and obj2 into a new object (stObj). The first argument {} ensures we create a new object instead of modifying obj1 directly.
console.log(stObj);  // Logs: {1: "a", 2: "b", 3: "a", 4: "b"} (merged object with properties from both obj1 and obj2)

// Merging obj1 and obj2 using the spread operator
const spobj = {...obj1, ...obj2};  // Merges obj1 and obj2 into a new object (spobj) using the spread operator, a shorthand for merging objects.
console.log(spobj);  // Logs: {1: "a", 2: "b", 3: "a", 4: "b"} (same result as Object.assign())

// Array of user objects
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
];

// Accessing and logging the email of the second user (index 1)
console.log(users[1].email);  // Logs: "b@gmail.com" (accessing the email of the second user in the 'users' array)

// Logging the tinderUser object
console.log(tinderUser);  // Logs the current state of the tinderUser object

// Getting the keys (property names) of the tinderUser object using Object.keys()
console.log(Object.keys(tinderUser));  // Logs an array of the keys: ["id", "name", "isLoggedIn"]

// Getting the values of the tinderUser object using Object.values()
console.log(Object.values(tinderUser));  // Logs an array of the values: ["1266", "Musaddique", false]

// Getting an array of key-value pairs (entries) of the tinderUser object using Object.entries()
console.log(Object.entries(tinderUser));  // Logs an array of key-value pairs: [["id", "1266"], ["name", "Musaddique"], ["isLoggedIn", false]]

// Checking if the tinderUser object has a specific property using hasOwnProperty()
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // Logs: true (because 'isLoggedIn' is a direct property of tinderUser)

// Creating a new object with destructuring assignment to extract properties
const course = {
    coursename: "js in hindi",  // Adding the 'coursename' property with value "js in hindi"
    price: "999",  // Adding the 'price' property with value "999"
    courseInstructor: "musaddique"  // Adding the 'courseInstructor' property with value "musaddique"
}

// Using object destructuring to extract 'courseInstructor' and renaming it to 'instructor'
const {courseInstructor: instructor} = course;  // Destructures 'courseInstructor' from the 'course' object and renames it to 'instructor'
console.log(instructor);  // Logs: "musaddique" (the value of 'courseInstructor' in the 'course' object)


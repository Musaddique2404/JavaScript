// For-in Loop: Used for looping over the keys (or property names) of an object

const myObj = {
    js: 'javaScript',       // Key 'js' with value 'javaScript'
    cpp: 'c++',              // Key 'cpp' with value 'c++'
    rb: 'ruby',              // Key 'rb' with value 'ruby'
    swift: 'Swift by apple' // Key 'swift' with value 'Swift by apple'
};

// Using 'for-in' loop to iterate over the keys of the object 'myObj'
for (const key in myObj) {
    // Logs the key and its corresponding value from the object
    console.log(`${key} shortcut is for ${myObj[key]}`);
}
// Output: 
// js shortcut is for javaScript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for Swift by apple

// For-in Loop with Array: Used for looping over the indices (keys) of an array

const programming = ["js", "rb", "py", "java", "cpp"];

// Using 'for-in' loop to iterate over the indices of the 'programming' array
for (const key in programming) {
    // Logs the value at the current index of the array
    console.log(programming[key]);
}
// Output:
// js
// rb
// py
// java
// cpp

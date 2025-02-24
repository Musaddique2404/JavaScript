// Checking if a value exists (Truthy / Falsy values)
const userEmail = "khanmusaddique48@gmail.com";

// Checking if `userEmail` has a truthy value
if(userEmail){
    console.log("Got user Email"); // Executes if userEmail is truthy
}else{
    console.log("Didn't get user email"); // Executes if userEmail is falsy
}

/*
  Truthy and Falsy Values:
  - **Truthy**: Any value that is considered true in a boolean context. Examples: non-empty strings, arrays, objects, etc.
  - **Falsy**: Values that are considered false when evaluated in a boolean context. Examples: `false`, `0`, `-0`, `BigInt 0n`, `""`, `null`, `undefined`, `NaN`.
*/

// Checking if an array is empty
const email = [];

if(email.length === 0){
    console.log("Array is Empty"); // Executes if the array is empty
}else{
    console.log("Array has some value..."); // Executes if the array has at least one element
}

// Checking if an object is empty
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // Executes if the object has no properties
}else{
    console.log("Object has some value..."); // Executes if the object has at least one property
}

/*
  **Object.keys()** method returns an array of a given object's own enumerable property names.
  If the object has no properties, `Object.keys()` will return an empty array.
*/

// Nullish Coalescing Operator (??) 
/*
  The nullish coalescing operator (`??`) returns the right-hand operand when the left-hand operand is `null` or `undefined`. 
  It does not check for other falsy values like `0` or an empty string.

*/

let val1;
val1 = 5 ?? 10; // 5 is not null or undefined, so it returns 5
val2 = null ?? 10; // null is null, so it returns 10
val3 = undefined ?? 19; // undefined is undefined, so it returns 19
val4 = null ?? 16 ?? 65; // null is null, so it returns 16, because the second nullish value is 16

console.log(val1); // 5
console.log(val2); // 10
console.log(val3); // 19
console.log(val4); // 16

/*
  **Key Points about the Nullish Coalescing Operator**:
  - `??` only returns the right value when the left value is `null` or `undefined`.
  - It is useful when you want to ensure that `null` or `undefined` values are replaced, but keep other falsy values (like `0` or `""`).
*/

// Ternary Operator (Conditional Operator)
// Syntax: condition ? expression_if_true : expression_if_false

const iceTeaPrice = 100;

iceTeaPrice <= 80 
    ? console.log("less than 80") // Executes if iceTeaPrice is less than or equal to 80
    : console.log("more than 80"); // Executes if iceTeaPrice is greater than 80

/*
  **Ternary Operator**:
  - A shorthand for the `if-else` statement.
  - It evaluates the condition; if true, it executes the first expression, and if false, the second expression.

  Example of regular `if-else`:
  if (iceTeaPrice <= 80) {
      console.log("less than 80");
  } else {
      console.log("more than 80");
  }
*/

// Falsy Values
/*
  These are the values that are considered `false` when evaluated in a boolean context. 
  They include:
  - `false`
  - `0`
  - `-0`
  - `BigInt(0n)`
  - `""` (empty string)
  - `null`
  - `undefined`
  - `NaN`
*/

// Truthy Values
/*
  These are values that are considered `true` when evaluated in a boolean context.
  Even values like:
  - `"0"` (string with zero)
  - `'false'` (string)
  - `" "` (space)
  - Arrays (even empty ones `[]`)
  - Objects (even empty ones `{}`)
  - Functions
*/

// Equality Comparisons with Falsy Values

// Comparing falsy values
console.log(false == 0);   // true
console.log(false == "");  // true
console.log(0 == "");      // true

/*
  **Explanation**:
  - **false == 0** returns true because `false` is considered `0` when converted to a number.
  - **false == ""** returns true because both `false` and `""` are falsy values.
  - **0 == ""** returns true because both `0` and `""` are falsy values.
*/


// The Switch Statement in JavaScript
/*
  A `switch` statement is a control flow statement that executes different blocks of code based on the value of an expression.
  It is often used when you need to check a variable against multiple potential values.
  
  Syntax:
  
  switch (expression) {
      case value1:
          // Code block executed if the expression matches value1
          break;
      
      case value2:
          // Code block executed if the expression matches value2
          break;
      
      ...
      
      default:
          // Code block executed if no cases match the expression
          break;
  }

  Notes:
  - The `switch` statement evaluates the expression once and compares it with each `case` value.
  - If a match is found, the corresponding code block will execute.
  - The `break` statement is used to exit the `switch` statement after a matching `case` is executed.
  - If no cases match, the `default` block will execute (if provided).

*/

/*
  Example 1: Using Switch Statement to Print Month Names
*/

const month = "march";

switch (month) {
    case "jan":
        console.log("January"); // Executes if month is "jan"
        break;
    case "feb":
        console.log("February"); // Executes if month is "feb"
        break;
    case "march":
        console.log("March"); // Executes if month is "march"
        break;
    case "april":
        console.log("April"); // Executes if month is "april"
        break;

    default:
        console.log("No matching month found!"); // Executes if no case matches
        break;
}

/*
  In this example, the `month` variable is evaluated against each `case`. 
  - If `month` is `"march"`, the case `case "march":` will execute, printing `"March"`.
  - If no case matches, the `default` block will execute (printing `"No matching month found!"`).
  
  Key Points to Remember:
  - **`switch`** is more efficient when dealing with multiple potential conditions based on the same expression.
  - **`break`** is important. Without it, JavaScript will continue executing subsequent cases, even if a match is found (this is called "falling through").
  - **`default`** is optional but recommended to handle cases where no matching `case` is found.
  
  Example of "falling through" (without `break`):
  javascript
  const number = 2;
  switch (number) {
      case 1:
          console.log("One");
      case 2:
          console.log("Two");
      case 3:
          console.log("Three");
      default:
          console.log("Default case");
  }
*/
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Push dc_heros array into marvel_heros array
marvel_heros.push(dc_heros);

// Logging marvel_heros array and accessing a nested character in dc_heros
console.log(marvel_heros);
console.log(marvel_heros[3][1]); // This will log 'flash', because dc_heros is at index 3

// Concatenating marvel_heros and dc_heros into a new array
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);  // Logs the concatenated array of Marvel and DC heroes

// Using spread operator to combine arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);  // Logs the new array with Marvel and DC heroes combined

// Flattening a nested array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);  // Flattens the array completely
console.log(real_another_array);  // Logs the fully flattened array

// Checking if a value is an array
console.log(Array.isArray("Hitesh"));  // Returns false because "Hitesh" is a string, not an array

// Converting string "Hitesh" to an array
console.log(Array.from("Hitesh"));  // Returns an array of characters: ['H', 'i', 't', 'e', 's', 'h']

// Array.from() on an object with a custom structure
console.log(Array.from({name: "hitesh"}));  // Interesting: This will log an empty array because the object is not iterable

// Creating a new array from individual scores
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));  // Logs an array: [100, 200, 300]
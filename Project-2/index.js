Day 1: Introduction to JavaScript

JavaScript can be used to create desktop applications using frameworks like Electron.js, which combines Node.js and Chromium to build cross-platform applications.

2. Difference Between let and var
let: Declares variables that are block-scoped, meaning they are only accessible within the block where they are defined. Recommended for modern JavaScript development due to its predictable scoping.

var: Declares variables that are function-scoped, meaning they are accessible throughout the function or globally if declared outside any function. Its scoping can lead to unexpected behaviors in larger applications.

let x = 10; // Block-scoped
var y = 20; // Function-scoped or globally scoped
3. String Concatenation
Combine strings to form a single string using the + operator or template literals for better readability.

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // "Hello World"
console.log(`${str1} ${str2}`); // "Hello World"
4. typeof Operator
Used to determine the data type of a variable. Helps in debugging and type-checking.

let num = 42;
console.log(typeof num); // "number"
5. Adding Space Between Strings
Use the + operator with a space string (" ") to insert a space between two strings.

let a = "Hello";
let b = "World";
console.log(a + " " + b); // "Hello World"
6. Exponentiation (**)
The ** operator is used to calculate the power of a number. A modern alternative to Math.pow().

console.log(2 ** 3); // 8
7. Strict Equality (===)
Compares both the value and the data type of two operands. Returns true only if both are exactly the same.

console.log(5 === "5"); // false (different types)
console.log(5 === 5); // true (same type and value)
8. BigInt
A special numeric data type used for representing integers of arbitrary size beyond the safe range of Number. Commonly used for cryptography and large calculations.

let bigNum = 123456789012345678901234567890n;
console.log(typeof bigNum); // "bigint"
Functions in JavaScript
Traditional Function
A standard way to declare a reusable block of code. Useful for named functions.

function function_name() {
    // Function logic
}
Arrow Function
A shorter syntax for writing functions, often used for callbacks or inline functions. It does not bind its own this.

const function_name = () => {
    return; // Function logic
};
Example Code:
let a = "aditee";
console.log(`Hello ${a}, How are you?`); // Output: Hello aditee, How are you?
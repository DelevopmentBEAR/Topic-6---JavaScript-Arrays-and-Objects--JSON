console.log("Hello, World!");

// Three ways to create variables
let color = "blue"; // let allows you to reassign the variable
var size = 'midium'; // not recommended to use var, it has function scope and can lead to bugs
const language = "JavaScript"; // const is used for variables that won't change, it has block scope
// language = 'C#'; // This will throw an error because language is a constant

// variable types
let quantity = 5; // number
let distance = 4.5; // number with decimal

let text = "Hello"; // string
let message = `Hi programmers`; // double and single quotes are fine for strings, but don't mix them up. 

console.log('There are ' + quantity + ' items in stock.'); 
// This is string concatenation, it combines strings and variables together

console.log('-----------------------------'); // This is just a separator for the console output

let todayTemp = 75;
console.log('Today\'s temperature is ' + todayTemp + ' F degrees.'); 
// Teacher solution. This is string concatenation, it combines strings and variables together. 
// The backslash is used to escape the single quote in "Today's".
console.log(`Today's temperature is ${todayTemp} F degrees.`); 
// This is string interpolation, it allows you to embed variables directly into a string using backticks and ${} syntax. 
// It's more readable than concatenation.

let tempC = (todayTemp - 32) * 5 / 9; // This is a math operation to convert Fahrenheit to Celsius
console.log('Today\'s temperature in Celsius is ' + tempC.toFixed(2) + ' C degrees.'); // Teachers solution using concatenation
console.log(`Today's temperature in Celsius is ${tempC.toFixed(2)} C degrees. which is ${todayTemp} F degrees.`); 
// This is string interpolation, it allows you to embed variables directly into a string using backticks and ${} syntax.
// toFixed(2) formats the number to 2 decimal places.

console.log('-----------------------------'); // This is just a separator for the console output

function shout(text) {
    return text.toUpperCase() + "!!!"; // This function takes a string, converts it to uppercase and adds three exclamation marks.
} 
console.log(shout("hello world","hello")); // This will print "HELLO WORLD!!!" and "HELLO!!!" to the console
//console.log(shout()); // This will print "undefined!!!" to the console because the function is called without an argument, so text is undefined.
let message2 = shout("hello web programmers"); // This will assign "HELLO WEB PROGRAMMERS!!!" to the variable message2
console.log(message2); // This will print "HELLO WEB PROGRAMMERS!!!" to the console

console.log('-----------------------------'); // This is just a separator for the console output

function f_to_c(tempF, decimalPlaces) {
    let tempC = (tempF - 32) * 5 / 9; // This is a math operation to convert Fahrenheit to Celsius
    if (decimalPlaces) { // This checks if the decimalPlaces argument is provided
        // decimalPlaces is an undefined value, which is considered a false value or 'falsy' in JavaScript.
        return tempC.toFixed(decimalPlaces); // If it is provided, it formats the temperature to the specified number of decimal places
    } else {   
    return tempC.toFixed(2); // This will return the temperature in Celsius formatted to 2 decimal places.
}}

let newTemp = 75;
newC = f_to_c(newTemp); // This will call the f_to_c function with 75 as the argument and assign the result to newC
console.log(newC); // This will print "23.89" to the console, which is the Celsius equivalent of 75 degrees Fahrenheit.

// Alternatively, you can call the function directly in the console.log statement without assigning it to a variable:
console.log(f_to_c(newTemp)); // This will print "23.89" to the console, which is the Celsius equivalent of 75 degrees Fahrenheit.

console.log('-----------------------------'); // This is just a separator for the console output

function isMinnesoteZip(code) {
    // All MN zip are between these: 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true; // This will return true if the code is a valid Minnesota zip code
    } else {
        return false; // This will return false if the code is not a valid Minnesota zip code
    }
}

console.log(`Is 55403 a valid Minnesota zip code? ${isMinnesoteZip(55403)}`); // This will print true to the console, because 55403 is a valid Minnesota zip code
console.log(`Is 55001 a valid Minnesota zip code? ${isMinnesoteZip(55001)}`); // This will print true to the console, because 55001 is a valid Minnesota zip code (it's the minimum valid zip)
console.log(`Is 56764 a valid Minnesota zip code? ${isMinnesoteZip(56764)}`); // This will print false to the console, because 56764 is not a valid Minnesota zip code
console.log(`Is 99999999999 a valid Minnesota zip code? ${isMinnesoteZip(99999999999)}`); // This will print false to the console, because 99999999999 is not a valid Minnesota zip code    
console.log(`Is -1 a valid Minnesota zip code? ${isMinnesoteZip(-1)}`); // This will print false to the console, because -1 is not a valid Minnesota zip code

console.log('-----------------------------'); // This is just a separator for the console output

function vaildGPA(gpa) {
    return (gpa >= 0 && gpa <= 4.0) ? true : false; 
    // This will return true if the gpa is between 0 and 4.0, inclusive, and false otherwise. 
    // This is a ternary operator, it is a shorthand for an if-else statement.
}

console.log(`Is 3.5 a valid GPA? ${vaildGPA(3.5)}`); // This will print true to the console, because 3.5 is a valid GPA
console.log(`Is 4.0 a valid GPA? ${vaildGPA(4.0)}`); // This will print true to the console, because 4.0 is a valid GPA (it's the maximum valid GPA)
console.log(`Is -1 a valid GPA? ${vaildGPA(-1)}`); // This will print false to the console, because -1 is not a valid GPA
console.log(`Is 5 a valid GPA? ${vaildGPA(5)}`); // This will print false to the console, because 5 is not a valid GPA

console.log('-----------------------------'); // This is just a separator for the console output

function cityState(city, state) {
    joined = city + ", " + state.toUpperCase(); // This will join the city and state together with a comma and space in between
    return joined; // This will return the joined city and state
}

function cityStateAddreess(city, state) {
    let address = `${city}, ${state.toUpperCase()}`; // This will return the joined city and state using string interpolation
    return address; // This will return the address variable
}

console.log(cityState("Minneapolis", "mn")); // This will print "Minneapolis, MN" to the console
let address = cityState("Seattle", "wa"); // This will assign "Seattle, WA" to the variable address
console.log(address); // This will print "Seattle, WA" to the console

console.log(cityStateAddreess("New York", "ny")); // This will print "New York, NY" to the console

console.log('-----------------------------'); // This is just a separator for the console output

let className = "Web Client and Server Programming"; // This is a string variable that holds the name of the class
let classCode = 2568; // This is a number variable that holds the class code
let department = "ITEC"; // This is a string variable that holds the department name
console.log(`This class is ${department} ${classCode} ${className}.`); 
// This will print "This class is ITEC 2568 Web Client and Server Programming." to the console using string interpolation.

console.log('-----------------------------'); // This is just a separator for the console output
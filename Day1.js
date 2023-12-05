

let firstName = prompt("Please Enter Your First Name");

let lastName = prompt("Please Enter Your Last Name");

let confirming = confirm(`Your Full Name is ${firstName} ${lastName}`);

let fullName = `${firstName} ${lastName}`;
document.write(fullName);

// let fullName = `${firstName} ${lastName}`;

let birthYear = prompt("Please Enter Your Birth Year");

// Calculate current year
let currentYear = new Date().getFullYear();

// Calculate age
let age = 2023 - birthYear;

document.write(`Welcome ${fullName}, you are ${age} years old`);


let message = alert(`It's the first release of our calculator that only has a summation feature.`);

// Ask the user to enter their first number
let firstNumber = prompt("Please Enter Your first Number");

// Ask the user to enter their second number
let lastNumber = prompt("Please Enter Your second Number");

// Convert input strings to numbers and perform addition
let sum = parseInt(firstNumber) + parseInt(lastNumber);

console.log(`Your summation result is ${sum}`);

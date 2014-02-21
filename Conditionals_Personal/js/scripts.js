//Gregory Mitchell Feb 20, 2014 Activity: Conditionals Personal
//Collect user info for a purchase
var x, y;
var sum, difference, product, quotient, remainder;

// Assign some values to x and y using ASSIGNMENT STATEMENTS and PROMPTS.
x = parseInt(prompt("Enter a numeric value for x:", ""));
y = parseInt(prompt("Enter a numeric value for y:", ""));
if (!x) {
  prompt("You need to enter a valid number! i.e, 1, 2, 3, 4 etc")
}
if (!y) {
  prompt("You need to enter a valid number! i.e, 1, 2, 3, 4 etc")
}
// The prompt function returns strings, use parseInt to change them to numbers

// Use some EXPRESSIONS and ASSIGNMENT STATEMENTS to do arithmetic on the user's data
// and store values for display.

if(x > y) {
	console.log("X is greater than Y");
} else if(x < y) {
	console.log("X is less than Y");
} else if(y > x) {
  console.log("Y is greater than X");
}
  else if(y < x) {
  console.log("Y is less than X");
} else {
  console.log("Either you didn't enter a number or the value are the same");
}


// Display the results in console:
console.log("Data Input Using Prompts and Assignment Statements \n");
console.log("The values of x and y are x = " + x + " and y = " + y);

// Display the results in console:
     console.log("x + y is " + sum);
     console.log("x - y is " + difference);
     console.log("x * y is " + product);
     console.log("x / y is " + quotient);
     console.log("x % y is " + remainder);
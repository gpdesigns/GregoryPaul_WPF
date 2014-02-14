//Gregory Mitchell Feb 13, 2014 Activity: Expression Personal
//Collect user input to calculate the width of any element in HTML
var contentWidthInput = parseInt(prompt("Have you ever wondered how to properly calculate the total width of an element in HTML?\nEnter in some quick data and I will calculate it for you! \n\nWhat is the width of your content?")); // ask user for width of content and opening message -- all inputs have parseInt to convert user strings to int
var contentLeftPaddingInput = parseInt(prompt("Input Left Padding?")); // prompt for left padding
var contentRightPaddingInput = parseInt(prompt("Input Right Padding?")); // prompt for right padding
var contentBorderLeftInput = parseInt(prompt("Input Left Border")); // prompt for left border
var contentBorderRightInput = parseInt(prompt("Input Right Border")); // prompt for right border
var contentMarginLeft = parseInt(prompt("Input Left Margin")); // prompt for left margin
var contentMarginRight = parseInt(prompt("Input Right Margin")); // prompt for right margin
var calculations = new Array(); // populate array with inputted data
calculations.push(contentWidthInput); // push all values to array
calculations.push(contentLeftPaddingInput);
calculations.push(contentRightPaddingInput);
calculations.push(contentBorderLeftInput);
calculations.push(contentBorderRightInput);
calculations.push(contentMarginLeft);
calculations.push(contentMarginRight);
console.log(calculations);
var totalWidth = calculations[0] + calculations[1] + calculations[2] + calculations[3] + calculations[4] + calculations[5] + calculations[6];
console.log("The total width of your element if you inputted all whole numbers is " + totalWidth);
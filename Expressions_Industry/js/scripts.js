//Gregory Mitchell Feb 13, 2014 Activity: Expression Personal
//Collect user input to calculate the width of any element in HTML
var contentWidthInput = parseInt(prompt("Have you ever wondered how to properly calculate the total width of an element in HTML?\nEnter in some quick data and I will calculate it for you! \n\nWhat is the width of your content?"));
var contentLeftPaddingInput = parseInt(prompt("Input Left Padding?"));
var contentRightPaddingInput = parseInt(prompt("Input Right Padding?"));
var contentBorderLeftInput = parseInt(prompt("Input Left Border"));
var contentBorderRightInput = parseInt(prompt("Input Right Border"));
var contentMarginLeft = parseInt(prompt("Input Left Margin"));
var contentMarginRight = parseInt(prompt("Input Right Margin"));
var calculations = new Array();
calculations.push(contentWidthInput);
calculations.push(contentLeftPaddingInput);
calculations.push(contentRightPaddingInput);
calculations.push(contentBorderLeftInput);
calculations.push(contentBorderRightInput);
calculations.push(contentMarginLeft);
calculations.push(contentMarginRight);
console.log(calculations);
var totalWidth = calculations[0] + calculations[1] + calculations[2] + calculations[3] + calculations[4] + calculations[5] + calculations[6];
console.log("The total width of your element if you inputted all whole numbers is " + totalWidth);
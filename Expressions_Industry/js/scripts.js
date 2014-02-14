//Gregory Mitchell Feb 13, 2014 Activity: Expression Personal
//Collect user input to calculate the width of any element in HTML
var calculations = new Array();
calculations.push(totalWidth);
var contentWidthInput = prompt("Have you ever wondered how to properly calculate the total width of an element in HTML?\nEnter in some quick data and I will calculate it for you! \n\nWhat is the width of your content?");
var contentLeftPaddingInput = prompt("Input Left Padding?");
var contentRightPaddingInput = prompt("Input Right Padding?");
var contentBorderLeftInput = prompt("Input Left Border");
var contentBorderRightInput = prompt("Input Right Border");
var contentMarginLeft = prompt("Input Left Margin");
var contentMarginRight = prompt("Input Right Margin");
var totalWidth = contentWidthInput + contentLeftPaddingInput + contentRightPaddingInput + contentBorderLeftInput + contentBorderRightInput + contentMarginLeft + contentMarginRight;

console.log(calculations);
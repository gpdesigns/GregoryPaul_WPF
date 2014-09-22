//Gregory Paul Feb 20, 2014 Activity: Conditionals Industry
//Collect user info and change the color of the screen
var who = prompt("What is your name");
if (who == "") { // error checking to make sure name is entered if not default value used in conditional
	alert("You must enter a name");
}
// display prompt box that ask for favorite color and 
// store result in a variable called favcolor
var favColor = prompt("What is your favorite color");
if(who == "" && favColor == "") { // check to make sure user enters color if not default used
	alert("You need to enter a color");
	var colorDefault = document.bgColor="pink";
	document.write("<h1>Hello 'USER' this is the default color</h1>");
	document.bgColor=colorDefault;
	console.log("Hello 'USER' your favorite color is " + colorDefault);
} else if (who !== "" && favColor == "") { // if user enters color and not a name
// Change background color to their favorite color
	document.write("<h1>Hello " + who + " this is the default color</h1>");
	document.bgColor="pink";
	console.log("Hello " + who + " your favorite color is " + colorDefault);}
else if (who == "" && favColor !== "") { // if user enters a name and not a color
// Change background color to their favorite color
	document.write("<h1>Hello 'USER' this is your favorite color</h1>");
	document.bgColor=favColor;
	console.log("Hello 'USER' your favorite color is " + favColor);}
 else { // if user has entered both name and color
	document.write("<h1>Hello " + who + " this is your favorite color</h1>");
	document.bgColor=favColor;
	console.log("Hello" + who + " your favorite color is " + favColor);
}


//Gregory Mitchell Feb 20, 2014 Activity: Conditionals Industry
//Collect user info and change the color of the screen
var who = prompt("What is your name");
if (who == "") {
	alert("You must enter a name");
}
// display prompt box that ask for favorite color and 
// store result in a variable called favcolor
var favcolor = prompt("What is your favorite color");
if(favcolor == "") { // check to make sure user enters color if not default used
	alert("You need to enter a color");
	var colorDefault = document.bgColor="pink";
	document.write("<h1>Hello 'USER' this is the default color</h1>");
	document.bgColor=colorDefault;
} else if (favcolor !== "") {
// Change background color to their favorite color
	document.write("<h1>Hello " + who + ", " + favcolor + " is is your favorite color</h1>");
	document.bgColor = favcolor;
}


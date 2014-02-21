//Gregory Mitchell Feb 20, 2014 Activity: Conditionals Wacky
// wacky conditionals body fat index 
var name = prompt("Please enter your name");
var time = prompt("On the average, how long does it take you to get ready in the morning? \nTen Minutes, Twenty Minutes, Thrity Minutes, Foutry Minutes, Fifty Minutes, Sixty Plus\n Enter the number in the box");

switch (time) {
  case 10:
  alert(time + " minutes is very quick " + name + " there is no way you are female");

  case 20:
  alert(time + " minutes is still very quick " + name + " you are most likely a male");
  
  case 30:
  alert(time + " minutes is average " + name + " you could be a male or female");
  
  case 40:
  alert(time + " minutes is teetering on rediculous " + name + " you're most likely a female");
  
  case 50:
  alert(time + " is way too long to get ready " + name + " you scream female");
  
  case 60:
  alert(time + " really???? " + name + " do you get lost getting ready?");
  
}
if (time == "") {
  prompt(Enter a number)
}
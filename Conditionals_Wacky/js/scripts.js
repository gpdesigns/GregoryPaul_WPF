//Gregory Mitchell Feb 20, 2014 Activity: Conditionals Wacky
// wacky conditionals body fat index 
var name = prompt("Please enter your name");
var time = parseInt(prompt("On the average, how long does it take you to get ready in the morning?\nTen Minutes, Twenty Minutes, Thrity Minutes, Foutry Minutes, Fifty Minutes, Sixty Plus\nEnter the number in the box"));
if(time <= 1 || >= 100) {
  Math.round(time, 10);
}
switch (time) {
  case 10:
  console.log(time + " minutes is very quick " + name + " there is no way you are female");
  break;

  case 20:
  console.log(time + " minutes is still very quick " + name + " you are most likely a male");
  break;

  case 30:
  console.log(time + " minutes is average " + name + " you could be a male or female");
  break;

  case 40:
  console.log(time + " minutes is teetering on rediculous " + name + " you're most likely a female");
  break;

  case 50:
  console.log(time + " is way too long to get ready " + name + " you scream female");
  break;

  case 60:
  console.log(time + " really???? " + name + " do you get lost getting ready?");
  break; 
}

if (name == "") {
  alert("Please enter a name");
}
if (time == "") {
  prompt("Enter a number!");
}

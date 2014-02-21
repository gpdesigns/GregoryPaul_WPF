//Gregory Mitchell Feb 20, 2014 Activity: Conditionals Wacky
// wacky conditionals body fat index 
var name = prompt("Please enter your name");
var time = parseInt(prompt("On the average, how long does it take you to get ready in the morning?\nTen Minutes, Twenty Minutes, Thrity Minutes, Foutry Minutes, Fifty Minutes, Sixty Plus\nEnter the number in the box"));
if(time < 1 || time < 9) {
  console.log(time + " minutes is very quick " + name + " there is no way you are female");
}
if(time < 10 || time < 19) {
  console.log(time + " minutes is still very quick " + name + " you are most likely a male");
}
if(time < 20 || time < 29) {
  console.log(time + " minutes is still very quick " + name + " you are most likely a male");
}
if(time < 30 || time < 39) {
  console.log(time + " minutes is average " + name + " you could be a male or female");
}
if(time < 40 || time < 49) {
  console.log(time + " minutes is teetering on rediculous " + name + " you're most likely a female");
}
if(time < 50 || time < 59) {
  console.log(time + " is way too long to get ready " + name + " you scream female");
}
if(time < 60) {
  console.log(time + " really???? " + name + " do you get lost getting ready?");
}


if (name == "") {
  alert("Please enter a name");
}
if (time == "") {
  prompt("Enter a number!");
}
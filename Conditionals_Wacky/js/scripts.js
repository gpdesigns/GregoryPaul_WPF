//Gregory Mitchell Feb 13, 2014 Activity: Expression Wacky
// wacky expression using switch statement
var game = prompt("What's your favorite game series, halo , call of duty, or battlefild?", "halo"); // first user prompt  asking for favorite game
switch (game) // start switch
{
  case "halo" : //case 1
     alert(game + " costs $42.50"); // pop up box displaying game and the cost
     break;
  case "call of duty" : // case 2
     alert(game + " costs $43.00");
     break;
  case "battleField" : // case 3
     alert(game + " costs $49.50");
     break;
  default :
     alert("I don't recognize that game refresh page"); // if none of the above are entered
     break;
}
var time = prompt("How many hours a day do you play?", "1 hours"); // user input for hours played a day
switch (time) start switch
{
  case "1 hours" : // case1
     alert(time + " Your brain is productive still"); // pop up box with time inputted and message
     break;
  case "2 hours" : // case 2
     alert(time + " A little more time playing and you will be a zombie");
     break;
  case "3 hours" : // case 3
     alert(time + " Your wasting your life away");
     break;
  default :
     alert("That's not a time"); // if none of the times are entered fail safe
     break;
}
var name = prompt("What's your name?"); // last prompt asking for name
console.log("Hey " + name + " you spend " + time + " a day playing " + game + ". Mom's say that if you play more then 1 hour a day you are wasting your life away, JUST SAYING"); // console log the result of all the questions

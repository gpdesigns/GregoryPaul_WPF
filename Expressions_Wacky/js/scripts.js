//Gregory Mitchell Feb 13, 2014 Activity: Expression Wacky
// wacky expression using switch statement
var game = prompt("What's your favorite game series, halo , call of duty, or battlefild?", "halo"); // first user prompt  asking for favorite game
switch (game)
{
  case "halo" :
     alert(game + " costs $42.50");
     break;
  case "call of duty" :
     alert(game + " costs $43.00");
     break;
  case "battleField" :
     alert(game + " costs $49.50");
     break;
  default :
     alert("I don't recognize that game refresh page");
     break;
}
var time = prompt("How many hours a day do you play?", "1 hours");
switch (time)
{
  case "1 hours" :
     alert(time + " Your brain is productive still");
     break;
  case "2 hours" :
     alert(time + " A little more time playing and you will be a zombie");
     break;
  case "3 hours" :
     alert(time + " Your wasting your life away");
     break;
  default :
     alert("That's not a time");
     break;
}
var name = prompt("What's your name?");
console.log("Hey " + name + " you spend " + time + " a day playing " + game + ". Mom's say that if you play more then 1 hour a day you are wasting your life away, JUST SAYING");

//Gregory Mitchell Feb 13, 2014 Activity: Expression Personal
//Collect user input for calculating reps per week
var daysInput = prompt("I am collecting information to calculate how many repititions people do per week at the gym.\n\nHow many times per week do you workout?");
var numberofExerciseInput = prompt("How many exercises do you do while at the gym?");
var numberofSetsInput = prompt("How many sets total for all exercises?");
var totalRepsPerDay = numberofExerciseInput * numberofSetsInput;
console.log(totalRepsPerDay);
var totalRepsPerWeek = totalRepsPerDay * daysInput;

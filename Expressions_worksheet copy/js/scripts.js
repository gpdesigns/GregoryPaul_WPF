// Gregory Mitchell Feb 13, 2014 Activity: Expression Worksheet
// Problem 1 Calculate Sparky's age
var age = 3;
var result= age * 7;

console.log("Sparky is " + age + " human years old which is " + result + " in dog years" );

// Problem 2 Calculate how many slices of pizza each partygoer will get
var numofSlicesPerPie = 8;
var numofPeople = 15;
var numofPies = 10;
var result = Math.round(numofPies * numofSlicesPerPie / numofPeople);

console.log("Each person ate " + result + " slices of pizza at the party");

// Problem 3 Calculate how many slices sparky will get
var numofSlicesPerPie = 8;
var numofPeople = 15;
var numofPies = 10;
var result = Math.round(numofPies * numofSlicesPerPie / numofPeople);
var sparkyAte = numofPies * numofSlicesPerPie % numofPeople;

console.log("Sparky got " + sparkyAte + " slices of pizza");

//Problem 4 Calculate the average amount spent on groceries
var weeklyTotals = [90, 30, 130, 300, 55];
var amountSpent = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4];
var result = amountSpent / weeklyTotals.length;
console.log("You have spent a total of " + "$" + amountSpent + " dollars on groceries over 5 weeks. That is an average of " + "$" + result + " dollars per week");


//Problem 5 Calculate the discounted price with and without sales tax
var originalPrice = 35;
var discountPercent = 0.15;
var discountTotal = originalPrice * discountPercent;
var discountPrice = originalPrice - discountTotal;
var item = "New Shirt";
var salesTaxPercentage = 0.075;
console.log(discountPrice);
var discountedPriceTax = discountPrice * salesTaxPercentage;
console.log(discountedPriceTax);
var pricewithTax = discountPrice + discountedPriceTax;
var pricewithoutTax = discountPrice;
console.log(pricewithTax);
console.log("Your " + item + " was originally " + "$" + originalPrice + " , but after a " + discountPercent + " % discount, it is now $" + pricewithoutTax + " without tax, and $" + pricewithTax + " with tax");


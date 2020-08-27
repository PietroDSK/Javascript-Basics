var number = 20;
var number2 = 10;
number += number2; // number = number + number2

console.log(number);

//Ternary Operator

//Condition ? true : false
var age = 20;
var diabetes = false;

var canDrink;
//Does not make sense return a boolean like "true" of "false"
canDrink = age >= 18 && diabetes ? "Can Drink" : "Cannot Drink";

console.log(canDrink);

var haveSchool = true;

//In this syntax you can only writh one line
if (haveSchool) 
console.log("YES");
else 
console.log("NO");


//EXERCISES
//Sum 500 on the value of scroll below
//assigning the new value to scroll
var scroll = 1000;
scroll += 500;

//Assign true for the variable giveCredits
//case the client own car and house
//and false if not.
var ownCar = true;
var ownHouse = true;
var giveCredits;
giveCredits = (ownCar && ownHouse);
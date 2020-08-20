//Number
var age = 23;
//Exponential
var ageExp = 23e10;
//Decimal
var ageDec = 2.1;
console.log(age, ageExp, ageDec);

//Operators

//SUM
var sum = 10 + 5 + 10;
console.log(sum);
//Division
var div = 200 / 5;
console.log(div);
//Module, return the remaining number of Division
var module1 = 14 % 5;
//10/5 is 2 correct? and the 4 restant? the 4 restant is our module.
console.log(module1);

//Arithmetic Operators (Strings)
var sum2 = "100" + 50; // response: 10050, because 100 is a string;
var subtraction = "100" - 50; // response: 50, because the 100 is converted for Number if is possible;
var multiplication = "100" * "2"; // response: 200, because the strings is converted for numbers;
var division = "Comprei 10" / 10; // response: NaN (Not a number), because can't convert the string in Number;
var division2 = "10" / 10; // response: 1, because can convert the string;

//verify if is NaN
console.log(isNaN(division));
console.log(isNaN(division2));

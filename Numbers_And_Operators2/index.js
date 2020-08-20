var sum1 = 10 + 10 + 20 + 30 * 4 / 2;
console.log(sum1);

//Unary Operators
var increment = 5;
var decrement = 5;
//The ++ increment one in the value like 5+1;
console.log(increment++);
console.log(decrement--);
//Return the value updated
console.log(increment);
console.log(decrement);

var age = '28';
var sumAge= -5;
//if you use + or -, the String is converted to Number
console.log(+age + sumAge);

//Exercises

//What is the result of this expression?
var total = 10+5*2/2+20;
var response;
console.log(response);

//Create two expressions who return NaN
var nan1 = 'test' / 2;
var nan2 = -'30c';
console.log(nan1, nan2);

//Sum the string '200' with the number 50 and return 250
var string = '200';
var number = 50;
console.log(+string + number);

//increment the number 5 and return the incremented value
var number5 = 5;
console.log(++number5);

//How to divide the weight by 2
var weightString = '80';
var unity = 'kg';
var weight = +weightString;
var weightBy2= (weight/2) + unity;
console.log(weightBy2);
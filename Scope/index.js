//This prevent the global variable
"use strict";
//Variables declared inside a function is not accessed out the function
function showCar() {
  var car = "Fusca";
  console.log(car);
}

showCar(); // Fusca in console
//console.log(car); // Error, car is not defined

//if you declare a variable without de key word 'var', 'const' or let,
// create a variable who can be accessed from anywhere(Global), it is a error.

//Variables declared on the scope dad of the function, can be accessed by then
var car2 = "Omega";
function showCar2() {
  console.log(car2);
}
showCar2();

// In the block scope, the variable declared by 'var' trespass the, because of this,
if (true) {
  var car3 = "palio";
  console.log(car3);
}
console.log(car3);

// the right way to declare a variable is by 'let' or 'const'
if (true) {
  const month = "dezember";
  console.log(month);
}
//console.log(month);//Error

{
  var car4 = "Fiat";
  const year = 2020;
}

console.log(car4);
//console.log(year) //Error

//When using var inside a 'for loop', which is a block, the value of the variable will
//trespass the block and exists outside of the loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`Outside the loop: ${i}`);

//The right way
for (let c = 0; c < 10; c++) {
  console.log(c);
}
// console.log(`Outside the loop: ${c}`) //ERROR

//CONST
// Keeps the scope of the block, prevents the redeclaration and modification of the value of the variable
const month2 = "september";
console.log(month2);
// mes = 'january';  //error, tried to modify
// const week; //error, declared without value

const date = {
  day: 28,
  month: "Dezembro",
  year: 2018,
};

date.year = 2019; // Works
// data = 'string'; // Error
date.day = 25; // Works

//LET
//Keeps the scope of the block, prevents the redeclaration and BUT allows modification of the value of the variable
let ano;
ano = 2018;
ano++;
console.log(ano); //2019

//  let ano = 2020; // error, redeclared variable

//Why the code below return errors?
{
  var color = "preto";
  const brand = "Fiat";
  let doors = 4;
  console.log(color, brand, doors);
}
//var is not a variable, brand and doors are out of the scope.
//console.log(var, brand, doors);

//How to correct the error below?
// function sumTwo(x){
//   const two = 2;
//   return x + two;
// }
// function divideTwo(x){
//   return x + two;
// }

// sumTwo(4);
// divideTwo(6)

//Answer
const two = 2;

function sumTwo(x) {
  return x + two;
}
function divideTwo(x) {
  return x / two;
}

sumTwo(4);
divideTwo(6);

//What do to make the total return 500?

// var number = 50;

// for (var number = 0; number < 10; number++) {
//   console.log(number);
// }

//const total = 10 * number;
//console.log(number)

//answer

const number = 50;

for (let number = 0; number < 10; number++) {
  console.log(number);
}

const total = 10 * number;
console.log(total);

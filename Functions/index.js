//Functions is a block of codes who can be used and reused.
//Values can be passed by a function and the same returns another value
function squareArea(side) {
  return side * side;
}
//Active Function
squareArea(2);
//you can pass a function in console.log
console.log("squareArea: " + squareArea(2));

function pi() {
  return 3.14;
}
//how i am returning a direct number in function, it's like a number
var total = 5 * pi(); // 15.7
console.log("total pi: " + total);
console.log("pi: " + pi());

//When creating a function, you can define parameters
//When execute a function, you pass arguments

// Weight and Height are parameters, you can pass how many you would like
function imc(weight, height) {
  var imc = weight / (height * height);
  return imc;
}

console.log("Imc: " + imc(80, 1.8)); //80 and 1.8 are arguments

//Conditions can be used in functions too
function favoriteColor(color) {
  if (color === "blue") {
    return "I like the sky!";
  } else if (color === "yellow") {
    return "PRAISE THE SUN";
  } else {
    return "I don't like colors";
  }
}
console.log("Favorite color BLUE: " + favoriteColor("blue"));
console.log("Favorite color YELLOW: " + favoriteColor("yellow"));
console.log("Favorite color ELSE: " + favoriteColor(""));

//Arguments can be functions too
//Callback Calls, usually are functions that occurs after any event

//addEventListener are a browser native function
//click anywhere in the page to run this code
addEventListener("click", function () {
  console.log("clicked");
});
//The function has two arguments
//First the string 'click'
//Second an anonymous function

//Other way to do
function consoleShow() {
  console.log("You have clicked!");
}
addEventListener("click", consoleShow());

//Functions may not return a value, when not defined a return, will return undefined;
function imc2(weight, height) {
  const imc = weight / height ** 2;
  console.log(imc);
}

imc2(90, 1.9); //undefined
console.log("UNDEFINED " + imc2(1000, 1.8));

//A function can return any type of data even another function
function thirdAge(age) {
  console.log(typeof age);
  if (typeof age !== "number") {
    return "please, put a number";
  }
  if (age >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(thirdAge(30));

function missingVisit(visitedCountries) {
  //Variables declared in the function dont work out of the function
  var totalCountries = 193;
  return `Still to visit ${totalCountries - visitedCountries} countries`;
}
console.log(missingVisit(30));

//Variables declared out of a function, can be used in one or more functions
var work = "Designer";

function data() {
  var name = "Pietro";
  var age = 20;

  function otherDatas() {
    var address = "Brazil";
    var age = "29";
    return `${name}, ${age}, ${address}, ${work}`;
  }
  return otherDatas();
}

console.log(data());
//otherDatas(); // Return a error

//Hoisting
//Before execute a function, the js 'moves' all the functions declared to the memory

//Exercises

//Create a function to verify if a value is true
function isTrue(value) {
  return !!value;
}

console.log(isTrue(" "));
console.log(isTrue(0));
//Create a math function who return the perimeter of a square
//tip: the perimeter is the sum of the 4 sides of square
function squarePerimeter(side) {
  var perimeter = side * 4;
  return perimeter;
}

console.log(squarePerimeter(4));

//Create a function who return your complete name
//she most own two params: name and last name
function completeName(name, lastname) {
  var completeName = `My name is ${name + " " + lastname}`;
  return completeName;
}
console.log(completeName("Pietro", "Klug"));

//create a function who verify if the number is even
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10));

//Create a function who return the data type of the argument passed
function dataType(arg) {
  return typeof arg;
}

console.log(dataType(39));

//addEventListener is a native function of Javascript
//The first parameter is the event that occur and the second the callback
//Use this function to show on console your complete name
//when the "click" event happens.

addEventListener("click", function () {
  console.log("Pietro Klug");
});

//correct the error below
var totalCountries = 193;
function needVisit(visitedCountries) {
  //var totalCountries= 193;
  return `Still remaining ${totalCountries - visitedCountries} for visit`;
}
function haveVisited(visitedCountries) {
  return `I have already visited ${visitedCountries} of the total ${totalCountries} countries`;
}

console.log(needVisit(20));
console.log(haveVisited(20));

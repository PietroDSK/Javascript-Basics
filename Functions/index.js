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

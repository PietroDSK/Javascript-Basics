//In the console on browser, you can make tests with this variable
//calling name.
var name = "André";
var nameTiny = name.toLowerCase();

var height = 1.8;

console.log(height.toString()); // '1.8'

console.log(height.toFixed()); // 2

//Select a element from the HTML from the class name
var btn = document.querySelector(".btn");

btn.classList.add("blue"); //Add the class blue in htlm
btn.innerText; // return the text on the elemente
btn.addEventListener("click", function () {
  return console.log("Clicked on button");
});

//EXERCISES

//Name 3 properties or methods of strings
var string = "I'ts a string";

// toUpperCase();
// replace;
// string;

//Name 5 propertios or methods of DOM Elements
var btn2 = document.querySelector(".btn");

//addEventListener
//appendChild
//id
//innerHtml
// outerHtml

//Search on web a object(method) able to interact with clipboard
//Clipboard is the part of your computer that deals with CTRL + C and CTRL + V

/* 
############################OBJECTS##################################
Set of variables and functions, that are called properties or methods
*/

var person = {
  //Properties of a Object
  name: "Pietro",
  age: 20,
};

console.log("Object person", person.name, person.age);

//Properties can receive a function too
//Methods, has an abbreviation of 'area: function() {}' what is 'area() {}'
var square = {
  sides: 4,
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * this.sides;
  },
  five() {
    return 5;
  },
};

console.log("Square Area: " + square.area(5));
console.log("Square Perimeter: " + square.perimeter(5));

//What object is for? serves to organize the code in small reusables parts

//Math is a native object of JS.
console.log(Math.PI);
//Console is a native object of the browser and the log is a method
console.log(Math.random());
console.table(square);

//To create a object is always with the {}
var car = {};
console.log("Type of car: " + typeof car);

//Dot Notation Get, to access a propertie of an object use .

var height = 100;

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  halfHeight() {
    //Keyword THIS
    // this will always make reference to the object
    return this.height / 2 + " " + height / 2;
  },
};
menu.backgroundColor = "#000";
// You can add new properties and methods
menu.color = "blue";

menu.hide = function () {
  return console.log("Hiding");
};
menu.hide();
var bg = menu.backgroundColor;
console.log(bg, menu.color);
console.log(menu.halfHeight());

//Exercises

// Create one object with your personal data
// have to own at least 2 properties name and lastname

var personalData = {
  name: "Pietro",
  lastName: "Klug",
  age: 20,
  completeName() {
    return `${this.name} ${this.lastName}`;
  },
};

//CREATE a method in the object above, who return your complete name

//Modify the value of propertie price for 3000
var car2 = {
  price: 1000,
  doors: 4,
  brand: "Audi",
};

car2.price = 3000;

//CREATE an object of a dog who represents a labrador,
//black, 10 years old, who barks when he sees a man
var dog = {
  breed: "Labrador",
  color: "Black",
  age: 10,
  barksWhen(seeingAMan) {
    if (seeingAMan === "man") {
      return "Roof Roof";
    } else {
      return "ZzzZZZzZZz";
    }
  },
};

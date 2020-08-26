// Array is a group of values. Serves to save different values in one variable

var videoGames = ["Switch", "PS4", "Xbox", "3DS"];

//Access an specific item in array
videoGames[0]; // 'Switch'
videoGames[2]; // 'Xbox'

//Methods and properties of array

videoGames.pop(); //Removes the last item then return it
videoGames.push("3DS"); // Add to the end of array
videoGames.length; // 3

//FOR LOOP

//Loops serves to do something repeatedly
//Counts to 10
for (var number = 1; number <= 10; number++) {
  console.log("For: " + number);
}

//WHILE LOOP
//Counts to 10
var i = 0;
while (i < 10) {
  console.log("While: " + i);
  i++;
}

//ARRAYS and LOOPS
//For with our videoGames Array
//The .lenght show us the total of items on array
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
}
// You can use the 'break' to stop the loop
for (var item = 0; item < videoGames.length; item++) {
  console.log("Break: " + videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

var fruits = ["Banana", "Watermelon", "Orange", "Blueberry"];
//ForEach
//Its a method who execute a function for each item of the array.
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

//Create an array with the years that your country wins the world cup
var worldCupBrazil = ["1959", "1962", "1970", "1994", "2002"];

//Interact with your array using a loop, to show the message 'The "your country" wins the world cup in ${ano}
worldCupBrazil.forEach(function (year) {
  console.log(`The Brazil wins the world cup in ${year}`);
});

//Interact with the array fruits below and stops when reachs orange
var fruitsExercise = [
  "Banana",
  "Watermelon",
  "Orange",
  "Blueberry",
  "Dragon Fruit",
];
for (var i = 0; i < fruitsExercise.length; i++) {
  console.log("I like " + fruitsExercise[i]);

  if (fruitsExercise[i] === "Orange") {
    break;
  }
}

//Put the last fruit of the array fruitsExercise in a variable,
//without remove the same of the array
var lastFruit = fruitsExercise[fruitsExercise.length - 1];

//Operator && (and)
//Compare if one or more conditions is true
//If have a false, return false immediately
true && true; //true
true && false; //false
false && true; //false
//if both is true, return the last true
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0, because 0 is a false value
"Gato" && false; // false
5 >= 5 && 3 < 6; //true

if (5 - 5 && 5 + 5) {
  console.log("True");
} else {
  console.log("False");
}

var conditional = 5 - 10 && 5 + 5;
if (conditional) {
  console.log("True");
} else {
  console.log("False");
}

//Operator || (or)
//Return the first true value
true || true; //true
true || false; //true
false || true; //true
"Cat" || "Dog"; //'Cat'
5 - 5 || 5 + 5; // 10
"Cat" || false; //Cat
5 >= 5 || 3 < 6; //true

var conditional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(conditional2); //Return 10 because 5-5 its 0, 0 is false, 5+5 its 10, 10 is true;

//Switch
// Verify if a variable is equal a different values
var favoriteColor = "yellow";

switch (favoriteColor) {
  case "blue":
    console.log("Look to the sky");
    //if is true break
    break;
  case "yellow":
    console.log("PRAISE THE SUN");
    break;
  case "green":
    console.log("Look at the leafs");
    break;

  //if its different from all cases
  default:
    console.log("close your eyes");
}

// Verify if your age is bigger than some parent
// Depending on the result put in the console 'Is bigger', 'Is equal' or 'Is smaller'
var myAge = 20;
var dadAge = 56;

if (myAge > dadAge) {
  console.log("I'm older");
} else if (myAge === dadAge) {
  console.log("I'ts equal");
} else {
  console.log("I'm younger");
}
// Who is the value returned from this expression?
var expression = 5 - 2 && 5 - " " && 5 - 2;
console.log(5 - " ");
console.log(expression);
// Verify if this variables are true or false
var name = "Andre";
console.log(!!name);
var age = 28;
console.log(!!age);
var haveGraduation = false;
console.log(!!haveGraduation);
var futureEmployment;
console.log(!!futureEmployment);
var moneyOnAccount = 0;
console.log(!!moneyOnAccount);

// Compare the total population in Brasil with Chine (value in millions)
var brasil = 207;
var china = 1340;
if (brasil === china) {
  console.log("is equal");
} else if (brasil < china) {
  console.log("Brazil have fewer inhabitants");
} else if (brasil > china) {
  console.log("China have fewer inhabitants");
}
// What will appear on console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// What will appear on console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

var haveGraduation = false;
var haveSchool = true;

//verify if haveGraduation is true and run the code
if (haveGraduation) {
  console.log("Have Graduation");
} //if haveGraduation its false, verify if haveSchool is true, if is true run this code
else if (haveSchool) {
  console.log("Have School");
} // if is false
else {
  console.log("Nothing");
}

var name = "Pietro";

//if the variable name have value, return true
if (name) {
  console.log(name);
} //if the variable name don't have value, return false
else {
  console.log("Name does not exist!");
}

// Return false
if (false);
if (0);
if (NaN);
if (null);
if (undefined);
if (""); //or "" or ``

// Return True
if (true);
if (1);
if (" "); //Spaces return true
if ("Pietro");
if (-5);
if ({}); //Object return true

//Logic Operator of Negation.

// If you put a !, the return will be the contrary
//Example
if (!true); //false
if (!1); //false
if (!""); //true
if (!undefined); //true
console.log(!haveGraduation); //true
//if you use !!, verify if is true or false
if (!!" "); //true
if (!!""); //false
console.log(!!haveGraduation); //false
//If haveGraduation its false, run the code
if (!haveGraduation) {
  console.log("Don't have graduation");
}

//if 10 is bigger than 5 run the code
if (10 > 5) {
  console.log("true");
}
//if 10 is bigger than 10 run the code
if (10 > 10) {
  console.log("true");
}
//this code above will not run, because 10 is not bigger than 10
//But if you put on, 10 is bigger or equal to 10 run this code
if (10 >= 10) {
  console.log("true");
}
//You can put on too, 10 is smaller or equal to 10 run this code
if (10 <= 10) {
  console.log("10");
}

var x = "10";
//if x its equal to 10
console.log(x == 10);
//if x its equal to 10 and is the same type of variable (Number, String, etc.)
console.log(x === 10);
//The ideal is to use always three equals: ===

var cat = "cat";
//if cat is diferent of 'cat'
console.log(x !== "cat");
//If one letter is different, they return true, because Cat is different of cat
console.log(x !== "Cat");

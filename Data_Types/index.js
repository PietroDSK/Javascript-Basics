// Primitive data types
var name = "Pietro"; // String
var age = 20; // Number
var haveSchool = true; //boolean
var team; // Undefined
var food = null; // Null
var symbol = Symbol(); // Symbol
var newObject = {}; // Object

//Verify Data type
console.log(typeof name);
console.log(typeof age);
console.log(typeof symbol);
//Data type of a null is Object
console.log(typeof food);

//You can SUM a string
var name2 = "Pietro";
var lastName = "Klug";
var completeName = name2 + " " + lastName;
console.log(completeName);

//Can SUM String with Number
var gols = 1000;
var anything = "Messi has made " + gols + " gols";
console.log(anything);

//Can SUM Numbers
var year = 2018;
var mes = 8;
console.log(year + mes);
//Using quotation markers inside simple quotes
var anything1 = 'This is the "best" game';
console.log(anything1);

//Template string leave you to use variables inside strings
var gols2 = 1000;
var anything3 = `Romário fez ${gols} gols`;
console.log(anything3);

//Exercises

//Declare a variable containing a string
var frase = "Eu estou estudando";

//Declare a variable containing a Number inside a String
var fraseNumero = "Eu estou Estudo há 20 Minutos";

//Declare a variable with your Age
var idade = 20;

//Declare two variables, one with your name and another with your lastName, then SUM
var nome = "Pietro";
var sobrenome = "Klug";
var nomeCompleto = `${nome} ${sobrenome}`;

//Put this phrase on a variable: It's time
var phrase = "It's time";

//Verify the type of variable who's contain your
var verifyName = typeof nome;
console.log(verifyName);

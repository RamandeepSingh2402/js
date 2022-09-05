//This is my first JavaScript code
//console.log prints Hello World in the console
console.log("Hello World");
let name = "Raman";
console.log(name);
//Rules for naming variables:
//reserved keywords can not be used
//names of the variables should be meaningful
//names of the variables cannot start with a number
//names of the variables cannot contain a spcae or hyphen (-)
//follow camelCaseNotation wile naming the variables 

// this is correct as well: let firstName = "Ramandeep", lastName = "Singh";
//but it is recommended to use different declarations and initializations for  both:
//like:
let firstName = "Ramandeep";
let lastName = "Singh";

//now lets learn about CONSTANTS:

//an example of overriden value of a variable
// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

//USING CONSTANTS:
const interestRate = 0.4;
//interestRate = 1;
console.log(interestRate);

//LETS NOW LEARN PRIMITIVE TYPES
//there are two different types: PRIMITIVE AND REFERENCE TYPES
//PRIMITIVE TYPES (VALUE TYPES)
//STRINGS, NUMBERS, BOOLEANS, UNDEFINED AND NULL ARE PRIMITVE DATA TYPES

//let name = "Raman"; //String Literal
let age = 20; //Number Literal
let isApproved = false; //Boolean Literal
//let firstName = undefined; //String Literal
let selectedColor = null; //we use null in situations where we want to clear the value of a variable


//IN JS, WE DON'T HAVE DIFFERENT TYPES OF NUMBERS: 
//ALL NUMBERS ARE OF TYPE "NUMBER"

//DYNAMIC TYPING
//LANGUAGES: STATIC LANGUAGES, DYNAMIC LANGUAGES
//IN STATIC LANGUAGES, THE TYPE OF THE VARIABLE ONCE SET CAN'T BE CHANGED
//IN DYNAMIC LANGUAGES, THE TYPE OF THE VARIABLE ONCE SET CAN CHANGE IN RUN TIME

//OBJECTS IN JS:
//REFERENCE TYPES: OBJECT, ARRAY, FUNCTION
//{} are called object literals
let person = {
    name: "Mosh",
    age: 30
};

//person is an object with two key value pairs, name and age

console.log(person);

//DOT NOTATION
person.name = "John";
console.log(person.name);

//BRACKET NOTATION
let selection = "name";
person[selection] = "Mary";
console.log(person.name);

//ARRAYS
//[] are called array literals, and they initialize an empty array
//The length of an array is dynamic as well. It can change as well!
//In JS, we can store objects of different types as well!
let selectedColors = ["red","blue"];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

//FUNCTIONS
//ONE OF THE FUNDAMENTAL BUILDING BLOCKS OF JS

//This function is performing a task
function greet(name, lastName){
    //this is the body of the function
    console.log("Hello " + name + " " + lastName);
}
//we dont need a ";" at the end of the function declaration
greet("Ramandeep","Singh");

function square(number){
    return number*number;
}
//let number = square(2);
console.log(square(2));
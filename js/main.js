//1. Write a console.log statement saying "Hello World!" for each language that you know.
console.log("Halo, dunia!"); // Indonesian
console.log("Ciao, mondo!"); // Italian
console.log("Hola, mundo!"); // Spanish


document.getElementById("hello").innerHTML = "Hallo, dunia! \
 Ciao, mondo! \
  Hola, mundo!";

// 2. Consider the following code:
//console.log('I'm awesome');
console.log('I\'m awesome');
document.getElementById("awesome").innerHTML = 'I\'m awesome';
// 3.Declare a variable x and initialize it with an integer, using these exact steps:
//3.1 First, declare your variable x (do not initialize it yet).
//3.2 Add a console.log statement that explains that explains in words what you
// think the value of x is, like in this example:

let x; //3.1
console.log("the value of my variable \"x\" will be: " + typeof (x)); //3.2
document.getElementById("initialize").innerHTML = "the value of my variable \"x\" will be: " + typeof (x);
//3.3 Add a console.log statement that logs the value of x.
//3.4 Now initialize your variable x with an integer.
//3.5 Next, add a console.log statement that explains what you think the value of x is.

console.log(x); //3.3
document.getElementById("initialize2").innerHTML = (x);
x = 5; //3.4
console.log("the value of my variable \"x\" will be: " + typeof (x)); //3.5
document.getElementById("initialize2").innerHTML = (x) + "," +
  ("\n the value of my variable \"x\" will be: " + typeof (x));
//3.6 Add a console.log statement that logs the value of x. Steps to be taken:
console.log(x); //3.6

//4. Declare a variable y and assign a string to it.
//4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
//4.2 Now console.log the variable y.
//4.3 Now assign a new string to the variable y.
//4.4 Just like you did before write a console.log statement that explains in words what you think will be logged to the console.
//4.5 Now console.log y again.

let y = "This is my string"; //4
console.log("the value of my variable \"y\" will be: " + typeof (y)); //4.1
console.log(y); //4.2
y = "This is the new value"; //4.3
console.log("the value of my variable \"y\" will be: " + typeof (y)); //4.4
console.log(y); //4.5

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
// 5.1 Declare a variable z and assign the number 7.25 to it.
// 5.2 Console.log z.
// 5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
// 5.4 Console.log a.
// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
// 5.6 Console.log the highest value.

let z = 7.25; //5.1
console.log("z= " + z); //5.2
let a;
a = Math.round(z); //5.3
console.log("a= " + a); //5.4
let biggerValue;
if (a > z) {
  biggerValue = a;
} else {
  biggerValue = z;
} //5.5
console.log("The bigger value is: " + biggerValue); //5.6

// 6. Arrays!
// 6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions.)
// 6.2 Write a console.log statement that explains in words what you think the value of the array is.
// 6.3 Console.log your array.
// 6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
// 6.5 Log your array.
// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
// 6.7 Log your new array!

let emptyArray = []; //6.1

console.log("the value of my array \"emptyArray\" will be: " + typeof (emptyArray)); //6.2
console.log(emptyArray); //6.3
let myFavoriteAnimals = ["Horses", "Dogs", "Cats", "Dolphins"]; //6.4
console.log(myFavoriteAnimals); //6.5
myFavoriteAnimals.push("baby pig"); //6.6
console.log(myFavoriteAnimals); //6.7

// 7. More strings
// 7.1 Let's consider the following string: let myString = "this is a test".
// 7.2 Add the string to your file and console.log it.
// 7.3 Find a way to get the length of myString.
// 7.4 Console.log the length of myString.

let myString = "this is a test"; //7.1
console.log("myString content is: " + '\"' + myString + '\"'); //7.2
console.log("The length of myString is " + myString.length); //7.2, 7,3

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
// 8.1 First declare at least four variables and assign them different data types.
// 8.2 For each variable write a console.log statement that logs the value
let theMovie = "The Hitchhiker's Guide to the Galaxy";
let theNumber = 42;
let theAnswerToLifeUniverseAndEverything = true;
let theBigotry = false; //8.1

console.log('The value of my variable \"theMovie\" is: ' + theMovie);
console.log('The value of my variable \"theNumber\" is: ' + theNumber);
console.log('The value of my variable \"theAnswerToLifeUniverseAndEverything\" is: ' + theAnswerToLifeUniverseAndEverything);
console.log('The value of my variable \"theBigotry\" is: ' + theBigotry); //8.2

// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log('The type of my variable \"theMovie\" is: String');
console.log('The type of my variable \"theNumber\" is: Number');
console.log('The type of my variable \"theAnswerToLifeUniverseAndEverything\" is: Boolean');
console.log('The type of my variable \"theBigotry\" is:  Boolean'); //8.3

// 8.4 Now use typeof to log the actual type of your variables.
console.log('The type of my variable \"theMovie\" is: ' + typeof (theMovie));
console.log('The type of my variable \"theNumber\" is: ' + typeof (theNumber));
console.log('The type of my variable \"theAnswerToLifeUniverseAndEverything\" is: ' + typeof (theAnswerToLifeUniverseAndEverything));
console.log('The type of my variable \"theBigotry\" is: ' + typeof (theBigotry)); //8.4

// 8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the variables you are comparing are not the same type.
if (typeof (theAnswerToLifeUniverseAndEverything) === typeof (theBigotry)) {
  console.log('SAME TYPE'); //8.5
} else {
  console.log('NOT THE SAME TYPE'); //8.6
};
if (typeof (theAnswerToLifeUniverseAndEverything) === typeof (theMovie)) {
  console.log('SAME TYPE');
} else {
  console.log('NOT THE SAME TYPE');
};
if (typeof (theAnswerToLifeUniverseAndEverything) === typeof (theNumber)) {
  console.log('SAME TYPE');
} else {
  console.log('NOT THE SAME TYPE');
};
//-----------------------------------------------------------//
if (typeof (theBigotry) === typeof (theMovie)) {
  console.log('SAME TYPE'); //8.5
} else {
  console.log('NOT THE SAME TYPE'); //8.6
};
if (typeof (theBigotry) === typeof (theNumber)) {
  console.log('SAME TYPE');
} else {
  console.log('NOT THE SAME TYPE');
};
//-----------------------------------------------------------//
if (typeof (theNumber) === typeof (theMovie)) {
  console.log('SAME TYPE'); //8.5
} else {
  console.log('NOT THE SAME TYPE'); //8.6
};
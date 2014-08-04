/*
alert("Hello World");
*/

//Exercise 1
// containter for values
var x = 5;
var y =10;
// Passes operation to two variables to create new variable
// In this case, addition
var res = x + y;
// Prints result to console
console.log(res);

//Excercise 2
// sets variable values
var fname = "Rebecca";
var lname = "Linde";
// sets value of what to return
var fullName = fname + " " + lname;
console.log(fullName);

//Exercise 3
// sets values in an array as variable
var channels = ["HBO", "NBC", "FOX", "FX", "SHO"]; //"HBO"
var shows = ["Veep", "Parks & Rec", "Mindy Proj", "Louie", "Masters of Sex"]; //"Parks & Rec"
// sets array of arrays as variable
var fav = [channels, shows];
// determines position within each array from which to return value
// i.e. second value in channels array and first value in shows array
// Note: first position in list is always 0
console.log(fav[1][0]);
console.log(fav[1][2]);
console.log(fav[0][4]);

//Exercise 4
// Sets value of variable
var myVar = 15;
// Provides string to print to console depending on conditions
// Conditions
if(myVar < 10){
	console.log("The variable is less than 10");
}else{
	console.log("The variable is" + " " + myVar + " and it is greater than 10");
} 

//Function Examples

//Example 1
// Sets function to add two to given variable
function addNumber(x) {
	return someNumber + 2;
}
// sets value of variable
var someNumber = 7;
// performs function
console.log(addNumber(2))
//

//Example 2
// same as above, using a function to print a string (rather than storing in new variable)
function createName() {
	var fname = "Rebecca";
	var lname = "Linde";
	console.log(fname + " " + lname);
}

createName()
//

//Example 3
// Function passes value as variable
function name(fname) {
	return console.log(fname);
}
// Any value placed in parenthesis will be fname
name("Rebecca");
//

//Example 4
// Print user input to console
var door = prompt("Pick Door#1, Door#2, or Door#3");
console.log(door);

// Print user input and conditional message to console
function prize(door) {
	var door = prompt('Pick door 1, door 2, door 3')
	// conditions and corresponding messages
	if(door == 1) {
		console.log("Your prize is 1");
	}
	else if(door == 2) {
		console.log("Your prize is 2");
	}
	else if(door == 3) {
		console.log("Your prize is 3");
	}
}

prize(door)


//Example 5
// Ask user to provide input
var input = prompt("provide input");
console.log(input);
var data = input.value;
// If field is not blank, user has provided input, confirm to user
function checkData(input){
	if (input !== null) {
		alert("Well done!")
	}
}

checkData(input)








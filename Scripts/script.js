/*
alert("Hello World");
*/

//Exercise 1
var x = 5;
var y =10;
var res = x + y;
console.log(res);

//Excercise 2
var fname = "Rebecca";
var lname = "Linde";
var fullName = fname + " " + lname;
console.log(fullName);

//Exercise 3
var channels = ["HBO", "NBC", "FOX", "FX", "SHO"]; //"HBO"
var shows = ["Veep", "Parks & Rec", "Mindy Proj", "Louie", "Masters of Sex"]; //"Parks & Rec"
var fav = [channels, shows];
console.log(fav[1][0]);
console.log(fav[1][2]);
console.log(fav[0][4]);

//Exercise 4
var myVar = 15;

if(myVar < 10){
	console.log("The variable is less than 10");
}else{
	console.log("The variable is" + " " + myVar + " and it is greater than 10");
} 

//Function Examples

//Example 1
function addNumber(x) {
	return someNumber + 2;
}

var someNumber = 7;
console.log(addNumber(2))
//

//Example 2
function createName() {
	var fname = "Rebecca";
	var lname = "Linde";
	console.log(fname + " " + lname);
}

createName()
//

//Example 3
function name(fname) {
	return console.log(fname);
}

name("Rebecca");
//

//Example 4
/* var door = prompt("Pick Door#1, Door#2, or Door#3");
console.log(door);

function prize(door) {
	// var door = prompt('Pick door 1, door 2, door 3')
	// var door = getElementsByTagName('door').value;
	console.log("your prize is" + " " + prize);

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
*/

//Example 5
/* var input = prompt("provide input");
console.log(input);
var data = input.value;

function checkData(input){
	if (input !== null) {
		alert("Well done!")
	}
}

checkData(input)
*/







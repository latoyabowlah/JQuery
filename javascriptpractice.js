// main.js

alert("Hello World");


function greetMe(){
 document.getElementById("greeting").innerHTML = "Nice Job!";
}


var L = 100;
var B = 9;
var result= L + B;
console.log(result);


var part1 = "The man is ";
var part2 = "really mean.";
var fullsentence = part1 + part2;
console.log(fullsentence);


var smalltalk = { breed: "samoyed" , age: 3, ismean: true };
console.log(smalltalk.ismean);// true
console.log(smalltalk.breed);//"samoyed





var age = 21;
if (age >= 21) {
	console.log("you may enter!");}

else {
	console.log("you may not enter!");
}

var word = "apple";
if (word === "apple") {
	console.log("correct! the word is apple");
} else {
	console.log("incorrect! That's not the word")
}


function addNumbers(num1, num2, num3) {
	return num1 + num2 + num3 + 100;
}
var result = addNumbers(100, 5,22);
console.log(result);



function alertName(name) {
	return alert(name);
}
var result = alertName(LaToya);
console.log(result);




var friends = ["Tiffani", "Tianna"]
var birthdays = ["Sept", "March"]
var bio =["friends", "birthdays"]
// string

//"readable characters"

//numbers 

//boolean
//true or false 
//undefined or null- no value

//array [ "x",0 ,true, 1] //list

//multidimensional array - [["apple, orange"] , ["yellow"]]

//object - {key: "value"} //dictionary

var colors = ["orange', 'yellow"]
console.log(colors[1]);

var latoya = { lastname: "bowlah", age: 24};
console.log(latoya.age)

//logical expressions

//=== test to see if two things are equal
//== checks if two things are not equal
//< > <= >=
var age = 24
if ( age < 50){
	alert ("age is less than 50");
}

	else if (age < 40) {
		("age is less than 40")
	}
	else{
		alert("age is greater than or equal to 50")
	}


//function
function subNumbers(num1, num2){

	if (typeof num1 === "Number" && typeof num2 === "Number") {
		return num1 - num2; 
	} else {
		return "whoops those aren't numbers";
	}
}

console.log(subNumbers(10,15));





function alertname(name){
	return alert(name);
}
	console.log(alertname("latoya"));



	function alertmessage() {
		return console.log("apples");
	}

	alertmessage()


alertmessage()


function alertwinner(door){

	if(door === 1){
		console.log("Congratulations you won!")
	}

	else if(door === 2){
		return console.log("Sorry wrong door!")
	}
	else if(door === 3){
		console.log("smalltalk")
	}
		
}

alertwinner(1)
alertwinner(2)
alertwinner(3)


// ++ is x+1 = new x




















// // How can we assign variable values and alert it.
// var a = "Hellow";
// alert(a);
// // how can get something from prompt and alert it.
// var b = prompt("type your name", "Hasnain");
// alert(b);

// // // How can we concatinate two strings.
// var c = prompt("what's Your name: ", "Hasnain");
// var d = prompt("What's Last name: ", "Khan");
// alert(c+" "+d);
// // How can we concatinate two numbers.
// var e = prompt("type any integer number: ", "7");
// var f = prompt("type another integer number: ", "5");
// var g = parseInt(e);
// var h = parseInt(f);
// var i = g+h;
// alert(i);


// // How can we assign variable values and write  it on html file.
// var a = "Hellow";
// document.write(a);
// // how can get something from prompt and alert it.
// var b = prompt("Type your name", "Hasnain");
// document.write(b);

// // // How can we concatinate two strings.
// var c = prompt("what's Your name: ", "Hasnain");
// var d = prompt("What's Your Last name: ", "Khan");
// document.write(c+" "+d);
// // How can we concatinate two numbers.
// var e = prompt("type any integer number: ", "7");
// var f = prompt("type another integer number: ", "5");
// var g = parseInt(e);
// var h = parseInt(f);
// var i = g+h;
// document.write(i);


// // Making a simple prompt calculator any any of one operator
// var firstNumber = prompt("Type Your First Number" , "5");
// var secondNumber = prompt("Type Your Second Number" , "3");
// var first = parseInt(firstNumber);
// var second = parseInt(secondNumber);
// document.write(first+second);

//making a simple prompt calculator using +-*/
// var firstNumber = prompt("Type Your First Number" , "5");
// var anyOperator = prompt("Type Any Operator" , "*");
// var secondNumber = prompt("Type Your Second Number" , "3");
// var first = parseInt(firstNumber);
// var second = parseInt(secondNumber);
// var $ = "Math.sqrt";
// if (anyOperator === "+" ){
//     document.write(first+second);
// }
// else if (anyOperator === "*" ){
//     document.write(first*second);
// }
// else if (anyOperator === "-") {
//     document.write(first-second);
// }
// else if (anyOperator === "/" ) {
//     document.write(first/second);
// }
// else if (anyOperator === "%" ) {
//     document.write(first%second);
// }
// else if (anyOperator === "$" ) {
//     document.write($first);
// }
// else{
//     document.write("incorrect operator");
// }
var name = prompt("write your name");
var last = prompt("write your sur name");
var email = prompt("write your Email address");
var firstNumber = parseInt(prompt("write your first number"));
var operator = prompt("write your operator like +,-,*,/,sqrt,power,sin,tan,cos");
document.getElementById("fullName").innerHTML = (name+last);
document.getElementById("email").innerHTML = (email);

if (operator ==="+" || operator==="-" || operator==="*" || operator==="/" || operator==="!"){
    var secondNumber = parseInt(prompt("type your second number"));
}
if ( operator === "+"){document.getElementById("addition").innerHTML=(firstNumber+secondNumber);}
    
else if ( operator === "-"){document.getElementById("subtraction").innerHTML=(firstNumber-secondNumber);}

else if ( operator === "*"){document.getElementById("multiplication").innerHTML=(firstNumber*secondNumber);}

else if (operator === "/"){document.getElementById("division").innerHTML=(firstNumber/secondNumber);}

else if (operator === "power"){document.getElementById("Power").innerHTML=(Math.pow(firstNumber,secondNumber))}

else if (operator === "sin"){document.getElementById("sin").innerHTML=(Math.sin(firstNumber))}

else if (operator === "tan"){document.getElementById("tan").innerHTML=(Math.tan(firstNumber))}

else if (operator === "cos"){document.getElementById("cos").innerHTML=(Math.cos(firstNumber))}

else if (operator === "sqrt"){document.getElementById("square-root").innerHTML=(Math.sqrt(firstNumber))}

else (alert("Plese define operator"));

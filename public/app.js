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
    var firstNumber = prompt("write your first number");
var operation = Prompt("write your operator");
var operationParse = parseInt(operation);
var firstNumberParse = parseInt(firstNumber)

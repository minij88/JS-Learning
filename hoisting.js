// Hoisting is JavaScript's default behavior of moving declarations to the top
// a variable can be used before it has been declared.
// Variables declared with var are hoisted and initialized with undefined.

a=5;
var a; 
console.log(a);    // shows 5

console.log(z);    // shows undefined
var z=5;
console.log(z);    // shows 5

// let and const are also hoisted, but they are not initialized. 
// They remain in the Temporal Dead Zone (TDZ) until their declaration is reached.

/* studentName="Aman";
let studentName;      // ReferenceError: Cannot access 'studentName' before initialization

/* studentName="Sakshi";
const studentName;       // SyntaxError: Missing initializer in const declaration

console.log(n);          // ReferenceError: Cannot access 'studentName' before initialization
let n=20;

console.log(m);          // ReferenceError: Cannot access 'm' before initialization
const m=30;
*/ 

var x=5,y=6;
console.log(x+y);    // shows 11

var c=5;
console.log(c+d);
var d=9;     // shows NaN   

var num1=4,num2;
console.log(num1+num2);
num2=3;      // shows NaN

// Function Declaration Hoisting: Function declarations are completely hoisted, so you can call them before they are defined.

greet();
function greet()
{
    console.log("Hello");           // shows Hello
}

// If a function is assigned to a variable, only the variable is hoisted.

sayHi();
var hiMsg=function sayHi()
{
    console.log("hi");    // shows ReferenceError: sayHi is not defined
}
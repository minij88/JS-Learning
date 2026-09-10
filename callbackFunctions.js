// A callback function is a function passed as an argument into another function.A callback function is intended to be executed later.
function greet(empname,callback)
{
console.log("Hello "+empname);
callback();
}
function sayBye()
{
console.log("Good bye");
}
greet("Mini",sayBye);    // shows Hello Mini Good bye

//Callback using an anonymous function- anonymous function is without name
function greeting(studentName,callback)
{
console.log("Hello "+studentName);
callback();
}
greet("Anamika",function(){
console.log("JS learning");
})     // shows Hello Anamika JS learning

// setTimeout() callback
// setTimeout() in JavaScript is used to run a function after a specified amount of time.

console.log("Start");
setTimeout(function(){
    console.log("JS learning");
},2000)
console.log("End");     // shows Start End JS learning

// Array forEach() callback
let cities=["Agra","Delhi","Goa"]
cities.forEach(function(cities){
console.log(cities);
});          // shows Agra Delhi Goa

// Callback using an arrow function
function calculate(a,b,callback)
{
    return callback(a,b);
}
let result=calculate(10,15,(x,y)=>x+y);
console.log(result);     // shows 25

// Add function using callback with arguments and return
/*
function add(a, b)
{
    return a + b;
} 
console.log(add(10,20));
*/

function add(a,b,callback)
{
let result = a + b;
callback(result);
}
add(10,20,function(result)
{
    console.log(result);
});      // shows 30

// Add function using callback with arguments and no return
/*
function add1(x,y)
{
    console.log(x + y);
} 
console.log(add(30,20));    // shows undefined
*/

function addArgumentNoReturn(x,y,callback)
{
let result1 = x + y;
callback(result1);
}
addArgumentNoReturn(40,50,function(result1)
{
     console.log(result1);
})

// Add function using callback with no arguments and no return
/*
function addNoArgNoReturn()
{
    let i=50;
    let j=80;
    console.log(i+j);
} 
console.log(addNoArgNoReturn());    // shows 130
*/

function addNoArgNoReturn()
{
     let i=50;
    let j=80;
    function callback()
    {
        console.log(i+j);
    }
    callback();
}
addNoArgNoReturn();

// Add function using callback with no arguments and return
/*
function addNoArgumentReturn() {
    let firstNumber = 100;
    let secondNumber = 20;
    return firstNumber + secondNumber;
}
console.log(addNoArgumentReturn());
*/

function addNoArgumentReturn(callback)
{
     let firstNumber=50;
    let secondNumber=90;
    return callback(firstNumber,secondNumber);
}
let result4=addNoArgumentReturn(function(firstNumber,secondNumber){
    return firstNumber+secondNumber;
});
console.log(result4);    // shows 140
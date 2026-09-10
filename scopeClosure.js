// Scope is the area of your program where a variable is accessible.
// Global Scope:A variable declared outside functions/blocks can generally be accessed throughout the script.

let country="India";
function greet()
{
    console.log(country);
}
greet();          // shows India
console.log(country);    // shows India

// Functional Scope: Variables declared  inside a function are available throughout that function and cannot be accessed outside the function.

function test()
{
    var x=10;
    console.log(x);
}
test();
//console.log(x);          // shows ReferenceError: x is not defined because x belongs to functional scope

function hi()
{
    let i=10;
    console.log("Value of i is "+i);
}
hi();
//console.log(i);        // shows ReferenceError: i is not defined

function hi()
{
    let i=20;
    console.log("Value of i is "+i);
}
hi();
//console.log(i);        // shows ReferenceError: i is not defined

// Block scope: block scope restricts variables to the specific block {} (like if statements, for loops, or standalone curly braces) where they are defined
// let and const are block-scoped.

if(true)
{
    let x=10;
    const y=20;
    console.log(x);  
    console.log(y);  
}
//console.log(x);        // shows ReferenceError: x is not defined
//console.log(y);        // shows ReferenceError: y is not defined

if(true)
{
    var a=5;
    console.log(a);     // shows 5
}
  console.log(a);      // shows 5 as var doesn't follow block scope

// Lexical scope means a function can access variables based on where the function was written, not where it is called
// Scope Chain:JavaScript looks for a variable from the current scope → outer scope → global scope.

let number1=30;
function outerFunction()
{
    let number2=40;
    function innerFunction()
    {
       console.log(number1); 
       console.log(number2); 
    }
    innerFunction();
}
outerFunction();              //shows 30 40

// A closure is created when an inner function remembers and can access variables from its outer function's scope, even after the outer function has finished executing.
// Closures are commonly used for data privacy/encapsulation.

function outer()
{
    let count=0;
    function inner()
    {
        count++;
        console.log(count);
    }
    return inner;
}
let counter=outer();
counter();             // shows 1
counter();             // shows 2
counter();             // shows 3
// counter is a closure that remembers count and counter() does not create a new count each time.


function createBankAccount() {
  let balance = 1000;

  return {
    getBalance() {
      return balance;
    },

    deposit(amount) {
      balance += amount;
    }
  };
}
const account = createBankAccount();
account.deposit(500);
console.log(account.getBalance());            //  shows 1500
console.log(account.balance);                //  shows undefined  
// The break statement is used to exit a loop when a certain condition is satisfied. 
// It is commonly used when searching for a specific value in an array or when an early exit from a loop is required.
// break stops the loop completely.
// break in for loop

//const { StrictMode } = require("react");
 "use strict";

for(let i=0;i<=10;i++)
{
    if(i==5)
        {
            console.log("Break the statement");
            break;
        }
    console.log(i);
}// shows 0 1 2 3 4 Break the statement

// break in while loop

let n=1;
while(n<=10)
{
if(n==6)
{
    console.log("Break the statement");
    break; 
}
console.log(n);
n++;
} // shows 1 2 3 4 5 Break the statement

// The continue statement skips the current iteration of the loop and moves to the next iteration without terminating the loop.
// continue skips only the current iteration.

//continue in for loop

for(let j=0;j<=10;j++)
{
    if(j==7)
    {
        continue;
    }
    console.log(j);
} // shows 1 2 3 4 5 6 8 9 10

// continue in while loop

let k=0;
while(k<=10)
{
k++;
if (k%2==0)
{
    continue;
}
console.log(k);
}

// The return statement in JavaScript is used to end the execution of a function and return a value to the caller
// return exits the function completely.

function add(a,b)
{
    let s;
    s=a+b;
    return s;
}
let sum=add(5,10);
console.log("sum of a and b is "+sum);

//If a return statement is used without a value, the function will return undefined.

function noReturn()
{
    return;
}
console.log(noReturn());  // shows undefined
//  for loop is a control flow statement that allows code to be executed repeatedly based on a condition.
//  It consists of three parts: initialization, condition, and increment/decrement.

// For loop to print numbers upto 50.

for(let i=0;i<=50;i++)
{
    console.log(i);
}

console.log("\n");

// For loop to print even numbers upto 20.

for(let j=0;j<=20;j=j+2)
{
    console.log(j);
}

// For loop to print table of a number.

let number=5;
for(let k=1;k<=10;k++)
{
    console.log(number*k);
}

//JavaScript treats conditional statement as true if left blank. 
// If this statement is omitted, the loop runs indefinitely if the loop control isn't broken using the break statement

let a = 2;
for (; ; a++) {
    console.log("Value of a:" + a);
    break;
}

var b = 5;

for (var b = 0; b < 10; b++)
     {
       console.log(b);
     }
console.log(b);   // shows 10

let c = 5;

for (let c = 0; c < 10; c++) 
    {
 console.log(c);
}     
console.log(c); // shows 5

// Sum of first n natural numbers

let s=0,n=1;
for(let d=1;d<=10;d++)
{
s=s+d;
}
console.log("Sum of 10 natural number is "+s);

// Program to check Prime number

const prompt = require('prompt-sync')(); 
let number1 = Number(prompt("Enter a number: "));
let isPrime= true;
if(number1<=1)
{
    isPrime=false;
}
else{
    for(let i=2;i<number1;i++)
    {
        if(number1%i==0)
        {
            isPrime=false;
            break;
        }
    }
}
if(isPrime)
{
    console.log(number1+" is prime");
}
else
{
    console.log(number1 +" is not prime");
}


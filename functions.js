// Functions are reusable blocks of code designed to perform a specific task. 
// They help make code modular, maintainable, and easier to debug.

// Function to print a message
function message()
{
    console.log("Hello");
}
message();

// Caling a function multiple times

let steps=10000;
let workOuttime=2;
if(steps>5000)
{
    message();
}
else if(workOuttime==2)
{
    message();
}
else
{
  console.log("Invalid");
}

// Function with Parameters

 function congratulate(user)
 {
    console.log(`Congratulations ${user}`);
    console.log(`Congratulations`+ user);

 }
 if(steps>2000)
 {
congratulate("Ram");
 }
 else if(steps<1000)
 {
congratulate(`shyam`);
 }

 // Functions with more than one parameters

 function greet(firstName,lastName)
 {
    console.log('Hello '+firstName+' '+lastName);
 }
 greet("Mini","Jain"); // shows Hello Mini Jain
 greet(100,200);  // shows Hello 100 200
 greet("Mini"); // shows undefined because only one argument is passed and second is undefined
 greet("Mini","Jain","Agarwal");  //shows Hello Mini Jain because more than two arguments are passed so extra one is ignored.

// Function with Default Parameters
// They have defalut value means if arguments are not passed to function then defalut values are used.

function sum(x,y)
{
    console.log(x+y);
}
sum(10);  // shows NaN because only one argument is passed and second is undefined and 10+undefined is NaN

function sum1(a,b=0)
{
    console.log(a+b);
}
sum1(20); // shows 20 as default value of b is 0 so it will do 20+0=20

function sum2(c,d=40)
{
    console.log(c+d);
}
sum2(20,60); // 80 as 60 will overwrite the default value of d and do 20+60=80

// Function return

function add(i,j)
{
    return i+j;
    i*j;   // any statement after return is not executed as return marks end of function
}
let result=add(10,20);
console.log("The sum is "+result);



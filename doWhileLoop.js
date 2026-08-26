//  do...while loop guarantees that the code block will execute at least once, regardless of whether the condition is met initially or not.

// Print numbers 1-10
let test=1;
do 
{
  console.log(test);
  test++;
} while(test<=10); // print 1-10

// Print odd numbers upto 20

let i=1;
do 
{
    console.log(i);
    i+=2;
}while(i<=20);

// Print table of a number

let number=4,j=1;
do
{
    console.log(number*j);
    j++;
    
}while(j<=10);

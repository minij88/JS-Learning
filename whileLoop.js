// A while loop in JavaScript repeatedly executes a block of code as long as a specified condition evaluates to true.

// print numbers upto 10

let i=1;
while(i<=10)
{
console.log(i);
i++;
}

// print odd numbers upto 20

let a=1;
while(a<=20)
{
    if(a%2!=0)
    {
        console.log(a);
    }
    a++;
}

// Print elements of array

let j=0;
let arr=[10,20,30,40];
while(j<arr.length)
{
console.log("Element at "+ j+" position is "+arr[j]);
j++;
}

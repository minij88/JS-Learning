// Program to find largest number in an array

let arrayLargest=[];
let userInput1=prompt("Enter your number of items you want in array");
for(i=1;i<=userInput1;i++)
{
    let numberOfArray=prompt("Enter a number");
    arrayLargest.push(numberOfArray);
}
console.log(arrayLargest);

let largestNumber=arrayLargest[0];
for(i=0;i<=arrayLargest.length;i++)
{
if(arrayLargest[i]>largestNumber)
{
    largestNumber=arrayLargest[i];
}
}
console.log("Largest number is "+largestNumber);

// Program to find smallest number in an array

let arraySmallest=[];
let userInput2=prompt("Enter your number of items you want in array");
for(j=1;j<=userInput2;j++)
{
    let number=prompt("Enter a number");
    arraySmallest.push(number);
}
console.log(arraySmallest);
let smallestNumber=arraySmallest[0];
for(j=1;j<=arraySmallest.length;j++)
{
if(arraySmallest[j]<smallestNumber)
{
smallestNumber=arraySmallest[j];
}
}
console.log("Smallest number is "+smallestNumber);

// Program to sort an array in ascending order
// Program to sort an array in descending order
// Program to find the duplicate element and its frequency in an array
// Program to find second maximum in an array
// Program to find second minimum in an array
// Program to perform bubble sort in an array
// Program to concate two arrays in a single array
// Arrays are ordered collections of elements that can store values of any type — numbers, strings, objects, even other arrays. 
// They are dynamic (can grow or shrink) and zero-indexed (first element is at index 0).

// Create Array using Literal

let numbers=[2,5,7,1,18,20];
console.log(numbers);    // shows [ 2, 5, 7, 1, 18, 20 ]

let empty=[]
console.log(empty);   // shows []

// Create using new Keyword (Constructor)

let fruits= new Array("Apple","Grapes","Kiwi");
console.log(fruits);      // shows [ 'Apple', 'Grapes', 'Kiwi' ]

// user input in an array using push method
// The push() method in JavaScript adds one or more elements to the end of an array and returns the new length of the array.

const prompt = require('prompt-sync')(); 
let userInput=prompt("Enter your number of items you want in array");
let arrNumber=[];
for(let i=1;i<=userInput;i++)
{
let askNumber=prompt("Enter numbers");
arrNumber.push(askNumber);
}
console.log(arrNumber);

// Retrieving array elements using for of loop

for(let value of arrNumber)
{
    console.log(value);
}

//Accessing array elements using length property

for(let j=0;j<arrNumber.length;j++)
{
    console.log(arrNumber[j]);
}

// Accessing the first element of array

console.log(arrNumber[0]);

// Accessing the last element of array

console.log(arrNumber[arrNumber.length-1]);

// Array length

let arrLength=(arrNumber.length);
console.log(arrLength);

// Array unshift() Method is used to add one or more elements to the beginning of the given array

let arrayName=["Shikha","Aman","Nikhil","Ram"]
let value=arrayName.unshift("Deepak");
console.log(value);
console.log(arrayName);

// add two numbers in front of an array using unshift

function add()
{
    let arrNumber=[12,13,14,15,16];
    arrNumber.unshift(10,11);
    return arrNumber;
}
console.log(add());

// Increase the length of an array

let arrAge=[20,30,40,50];
let arrAgeLength=arrAge.length;
console.log(arrAgeLength);
arrAgeLength=7;
console.log(arrAgeLength);

// Decrease the length of an array

arrAgeLength=2;
console.log(arrAgeLength);
console.log(arrAge); // why it is showing all elements?

// array concatenation

let arrStudentAge=["12","13","56"];
let arrStudentAge2=["11","15","76"];
let concatenateArray=arrStudentAge.concat(arrStudentAge2);
console.log(concatenateArray);

// Removing element of an array using Pop method
// The pop() method in JavaScript is used to remove the last element from an array and return that element.
// If the array is empty, it returns undefined.
// It modifies the original array (does not create a new one).
// The method does not accept any parameters.

let arrayPop=[23,45,11,9];
let popElement=arrayPop.pop();
console.log(popElement); // shows 9
console.log(arrayPop);  // shows[23,45,11]

// Pop an empty array

let arrayPopEmpty=[];
let popLastElement=arrayPopEmpty.pop();
console.log(popLastElement);  // shows undefined
console.log(arrayPopEmpty);  // shows []

// The shift() method in JavaScript is used to remove the first element of an array, reducing the array's length by one. 
// This method does not accept any parameter.
// This function returns the removed first element of the array. 
// If the array is empty then this function returns undefined.

let arrayCity=["Agra","Delhi","Kanpur","Goa","Lucknow"];
let valueShift=arrayCity.shift();
console.log(valueShift);
console.log(arrayCity);

// Removing first element from an empty array

let arrayEmptyShift=[];
let valueEmptyShift=arrayEmptyShift.shift();
console.log(valueEmptyShift);
console.log(arrayEmptyShift);

// Removing the First Element from the Nested Array

let arrayNested=[[1,"a","b"],[2,3,4],5,6];
let valueNested=arrayNested[1].shift();
console.log(valueNested);
console.log(arrayNested);

// The splice() method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements.
// When deleteCount is 0, so no elements are removed.
// If deleteCount isomitted, all elements from startIndex to the end are removed

// using splice() to remove Elements from an Array
let cities=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
cities.splice(1,1);
console.log(cities);  // shows [ 'Agra', 'Mumbai', 'Gangtok', 'Shillong', 'Rajkot' ]

// using splice() to add Elements in an Array
let citiesNew=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
citiesNew.splice(1,0,"Goa","Ranikhet");
console.log(citiesNew);  // shows ['Agra', 'Goa','Ranikhet', 'Delhi','Mumbai',   'Gangtok', 'Shillong', 'Rajkot']

// using splice() to replace Elements in an Array
let citiesNew2=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
citiesNew2.splice(2,3,"Goa","Ranikhet");
console.log(citiesNew2);  // shows [ 'Agra', 'Delhi', 'Goa', 'Ranikhet', 'Rajkot' ]

// using splice() to add Elements from the End of the Array
let citiesNew3=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
citiesNew3.splice(citiesNew3.length-1,1);
console.log(citiesNew3);  // shows [ 'Agra', 'Delhi', 'Mumbai', 'Gangtok', 'Shillong' ]

// using splice() to remove Elements from the End of the Array
let citiesNew4=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
citiesNew4.splice(citiesNew4.length-1,0,"Rishikesh");
console.log(citiesNew4);  // shows [ 'Agra', 'Delhi','Mumbai', 'Gangtok','Shillong', 'Rishikesh', 'Rajkot']

// Negative indices in splice()
let citiesNew5=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
citiesNew5.splice(-3,1,"Pune");
console.log(citiesNew5);  // shows [ 'Agra', 'Delhi', 'Mumbai', 'Pune', 'Shillong', 'Rajkot' ]

let citiesNew6=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
citiesNew6.splice(-3,0,"Pune");
console.log(citiesNew6);  // shows ['Agra',  'Delhi','Mumbai',  'Pune', 'Gangtok', 'Shillong','Rajkot']

let citiesNes7=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
citiesNes7.splice("Pune");
console.log(citiesNes7);  // shows []


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













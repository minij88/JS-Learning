// filter() method is used to create a new array containing only the elements that satisfy a condition.

// filter age greater than 18

const ageArray=[1.34,21,45,66];
function canVote(age)
{
    return age>=18;
}
let filteredArray=ageArray.filter(canVote);
console.log(filteredArray);                 // shows [ 21, 45, 66 ]

// to filter even numbers in an array

const evenArray=[22,45,55,66,21,77,98];
function evenNumber(number)
{
    return number%2==0;
}
let filteredEvenArray=evenArray.filter(evenNumber);
console.log(filteredEvenArray);              // shows [ 22, 66, 98 ]

// to filter words whose length is greater than 6

const fruitsArray=["Apple","Banana","Grapes","PineApple","Mango"];
function fruits(longWord)
{
return longWord.length>=6;
}
let filteredFruitsArray=fruitsArray.filter(fruits);
console.log(filteredFruitsArray);               // shows [ 'Banana', 'Grapes', 'PineApple' ]
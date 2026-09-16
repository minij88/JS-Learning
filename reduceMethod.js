// reduce() takes all elements of an array and reduces them to one final value.

// to find sum of all elements
const prices=[10,34,21,89,56,63,78];
function sum(previous,next)
{
return previous+next;
}
const total=prices.reduce(sum);
console.log(total);
console.log(`${total}`);

// to find maximum from an array
const grades=[20,40,70,98,89,45];
function maximum(previous,next)
{
    return Math.max(previous,next);
}
const maxValue=grades.reduce(maximum);
console.log(maxValue);                     // shows 98

// add the length of string element of an array 

const empName=["Ritu","Reena","Ananya","Udit"];
function sumOfLength(previous,next)
{
    return previous+next.length;
}
const lengthSum=empName.reduce(sumOfLength,0);
console.log(lengthSum);   
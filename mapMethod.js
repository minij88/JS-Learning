// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const numbers=[1,2,3,4,5];

// to double all elements
function doubleNumbers(value)
{
    return value*2;
}
const doubled=numbers.map(doubleNumbers);
console.log(doubled);            // shows [ 2, 4, 6, 8, 10 ]

// to find square of all elements
function square(value)
{
    return Math.pow(value,2);
}
const powerArray=numbers.map(square);
console.log(powerArray);            // shows [ 1, 4, 9, 16, 25 ]

// to convert all elements of an array in uppercase

const students=["Mini","Shikha","Aman","Deepak","Rohit"];
function upperStudents(element)
{
    return element.toUpperCase();
}
const upperArray=students.map(upperStudents);
console.log(upperArray);               // shows [ 'MINI', 'SHIKHA', 'AMAN', 'DEEPAK', 'ROHIT' ]

const dates=["2025-10-12","2024-12-02","2024-03-21","2027-09-11"];

function formatDates(element)
{
const parts=element.split("-");
return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
const formatDatesChanged=dates.map(formatDates);
console.log(formatDatesChanged);                 // shows [ '10/12/2025', '12/02/2024', '03/21/2024', '09/11/2027' ]
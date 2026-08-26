// the Date object is a built-in object that allows you to work with dates and times.

//  Date object representing the current date and time.
//  new Date() creates a Date object for the current date and time.

const now= new Date();
console.log(now);

// create a Date object for a specific date and time.

const specificDate= new Date("2026-08-19T10:00:00");
console.log(specificDate);

// create Date with individual parameters
// month parameter is zero indexed means January starts from 0 and December is 11.
const anotherDate= new Date(2023, 11, 25, 10, 0, 0);
console.log(anotherDate);

// creates a Date from a Unix timestamp in milliseconds
// 1672531200000 represents the number of milliseconds since January 1, 1970, 00:00:00 UTC.

const timeStampDate= new Date(1672531200000);
console.log(timeStampDate);

let cDate= new Date();
console.log(cDate.getFullYear()); //  shows 2026
console.log(cDate.getMonth());    //  shows 7
console.log(cDate.getDay());      //  shows day of the week and week starts from 0
console.log(cDate.getHours());   // shows current hour
console.log(cDate.getMinutes());  // Gets the current minutes
console.log(cDate.getDate());    // gets the current day of the month
console.log(cDate.getSeconds());  // Gets the current seconds

// Comparison of two dates

let date1=new Date("2026-08-11");
let date2=new Date("2025-09-09");
if(date1>date2)
{
    console.log(date1 +"is later");
}
else if (date2>date1)
{
    console.log(date2 +"is later");
}
else
{
    console.log("Both the dates are same");
}


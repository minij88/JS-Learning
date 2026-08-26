// The Ternary Operator in JavaScript is a conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false.

let marks=50;
let result= (marks>30) ? "pass": "fail";
console.log(result);

// Nested Ternary Operators
// The ternary operator can be nested, allowing you to perform multiple conditional checks in a single line of code.
// This technique is useful for replacing more complex if...else if...else statements or switch statements, keeping the code compact and readable.

let day=3;
let message= (day==1)?"Start of week":
(day==2)?"Second day":
(day==3)?"Mid week":
(day==4)?"End of week":
"weekend";
console.log(message);

// Another example of ternary operator
let hour=15;
let messageForHour;
messageForHour=(hour<12)? "Good morning": "Good afternoon";
console.log(messageForHour);

// Ternary Operator in Functions

function checkAge(age)
{
    return(age>18)?"Adult":"Minor";
}
console.log(checkAge(20));
console.log(checkAge(12));

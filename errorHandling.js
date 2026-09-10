//Error handling lets you catch problems at runtime so your program can respond gracefully instead of unexpectedly stopping.
//try...catch
//The try block contains the code that might cause an error. If an error occurs, JavaScript stops executing the try block immediately and passes control to the catch block.

try
{
const data=JSON.parse('{"name":John}');
console.log(data.name);
}
catch(error)
{
console.error("Invalid JSON"+error);     // shows Invalid JSONSyntaxError: Unexpected token 'J', "{"name":John}" is not valid JSON
}

// The finally block is executed regardless of whether an error occurred or not.
// throw is used to manually create an error (exception) in JavaScript.
function check(age)
{
    if(age<18)
    {
        throw new Error("Age must be 18 or above");
    }
    console.log("Access granted");
}
try
{
    check(16);
}
catch(error)
{
console.error(error.message);     // shows Age must be 18 or above
}
finally {
    console.log("Cleaning up");
}

// Multiple try catch and finally block

try
{
console.log("First try block");
let answer=10/0;
console.log(answer);
}
catch
{
console.error("First catch block");
}
finally{
console.log("First finally block");
}

try
{
console.log("Second try block");
let studentName=undefined;
console.log(studentName.toUpperCase());
}
catch(error)
{
console.error("Second catch block"+error.message);
}
finally{
console.log("Second finally block");
}

//Error TypeError ReferenceError SyntaxError RangeError
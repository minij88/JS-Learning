//The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not use undeclared variables.
// Declared at the beginning of a script so it has global scope

"use strict";
 x=10;                    //   shows ReferenceError: x is not defined

myFunction();
function myFunction()
{
    y=20;
    return y;              //   shows ReferenceError: y is not defined
}

// Declared inside a function, it has local scope (only the code inside the function is in strict mode)

a=10;
greeting();
function greeting()
{ 
 //   "use strict";
    b=20;
    return b;                    // shows ReferenceError: b is not defined
}

student={
    name:"Amit"
};                                     // shows ReferenceError: student is not defined

let c=10;
//delete c;                           // SyntaxError: Delete of an unqualified identifier in strict mode.

function add()
{

}
// delete add;                    //  SyntaxError: Delete of an unqualified identifier in strict mode.

function multiply(num1,num1)
{
    return(num1*num1);                    // SyntaxError: Duplicate parameter name not allowed in this context
}
//Truthy examples

let loggedIn=true;
let text="";

if(loggedIn)
{
    text="Welcome";
}
console.log(text);  //shows welcome

 // integer is truthy
if(42)
{
  console.log("This integer is truthy");  
}

// decimal is truthy
if(3.14)
{
    console.log("This decimal is truthy");  
}

// non-empty is truthy
if("Hello")
{
    console.log("This string is truthy");  
}

// white space is truthy
if(" ")
{
    console.log("This white space is truthy");  
}

// Boolean true is truthy
if(true)
{
    console.log("This is truthy");
}

//Falsy examples


// Boolean false is falsy
if(false)
{
    console.log("This is falsy");
}

// 0 is falsy
if(0)
{
    console.log("This is falsy");
}

// -0 is falsy
if(-0)
{
    console.log("This is falsy");
}

//  bigInt 0 is falsy
if(0n)
{
    console.log("This is falsy");
}

// Empty string is falsy
if("")
{
    console.log("This is falsy");
}

// null is falsy
if(null)
{
    console.log("This is falsy");
}

// undefined is falsy
if(undefined)
{
    console.log("This is falsy");
}

// NaN is falsy
if(NaN)
{
    console.log("This is falsy");
}

let config = null;
if (!config) {
    console.log("Configuration is missing."); 
}

else
{
  console.log("Configuration is not missing.");   
}
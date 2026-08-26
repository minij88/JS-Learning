// AND operator  (&&)

let age=20;
let idProof=true;
if(age>=18 && idProof)
{
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
}

// AND operator with integers

let x=5,y=0;
let res=x && y;
console.log(res);  //shows 0

res=x && 10;
console.log(res);   //shows 10

//OR operator (||)
let studentAge=16;
let hasGuardian=true;
if(studentAge>=18 || hasGuardian)
{
    console.log("Allowed");
}
else
{
    console.log("Not Allowed");
}

let i = 1;
let j = null;
let k = undefined;
let l = 0;
console.log(j || k); //shows undefined 
console.log(i || l);  //shows 1

console.log(Boolean(j || k));  //shows false
console.log(Boolean(i || l));  //shows true

// NOT Operator (!)
let isAllowed=true;
console.log(!isAllowed);   //shows false

let isLoggedIn=false;
if(!isLoggedIn)
{
    console.log("Log In");
}
else
{
    console.log("Not Logged in");   //shows Log In
}

let xstr1 = "Hello";
console.log(!xstr1);  //shows false
console.log(!!xstr1);  //shows true

let y_number = 20;
console.log(!y_number);  //shows false
console.log(!!y_number);   //shows true

//Nullish Coalescing (??) Operator

//let username=null;
//let defaultname= "Aman";
//console.log(username??defaultname)  // shows Aman

//let username=undefined;
//let defaultname= "Aman";
//console.log(username??defaultname)  // shows Aman

let username="Shivam";
let defaultname= "Aman";
console.log(username??defaultname)  // shows Shivam  


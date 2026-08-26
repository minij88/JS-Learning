// var variable--> can be redeclare and resassign
var a=10;
var a=20;
console.log(a);   //shows 20

var b=30;
b=40;
console.log(b);   //shows 40

// let variable--> cannot be redeclare but can be reaasign

let c=50;
//let c=60; //shows error c has laready been declared
console.log(c); 

let name="mini";
name="jain";
console.log(name); 

//const variable-->

const student_name="Aman";
//student_name="Agarwal" // shows error as Assignment to const variables
console.log(student_name); 

const teacher_name="Shikha";
//const teacher_name="Gupta" // shows error as teacher_name has already been declared
console.log(teacher_name); 
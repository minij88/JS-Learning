// number datatype for integers and decimals
let int=5;
console.log(int);  //shows 5
console.log(typeof(int));  // shows number

let decimal_integer=3.4;
console.log(decimal_integer);  //shows 3.4
console.log(typeof(decimal_integer)); // shows number

// boolean datatype for true or false
let bool_true=true;
console.log(bool_true); // shows true
console.log(typeof(bool_true));  // shows boolean

let bool_false=false;
console.log(bool_false); // shows false
console.log(typeof(bool_false)); //shows boolean

// string datatype for text 
let str1="hello";
let str2='hiii';
let str3=`hey`;
console.log(str1); //shows hello
console.log(str2); //shows hiii
console.log(str3); //shows hey

console.log(typeof(str1));  //shows string
console.log(typeof(str2));   //shows string
console.log(typeof(str3));   //shows string


// BigInt datatype for integers greater than numbers

let z=123n;
console.log(z);  //shows 123n

let z1=BigInt(1234567890123456789012345)
console.log(z1);   //shows 123456789012345678n
console.log(typeof(z1));  // shows bigint


// null datatype for intentionally absence of value

let x=null;
console.log(x);  //shows null
console.log(typeof(x));   //shows object


// undefined datatype means variable is declared but not assigned

let y;
console.log(y);  //shows undefined
console.log(typeof(y));   //shows undefined


console.log(10/0); //shows infinity
console.log(10/-0); //shows -infinity
console.log("mini"/0); //shows NaN
console.log("mini"*0);  //shows NaN
console.log("mini"-0);  //shows NaN
console.log("mini"+0);  //shows mini0








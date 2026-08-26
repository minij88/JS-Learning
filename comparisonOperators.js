// Equality (==) operator compares the equality of two operands. It compares only value not type.

let x=5;
let y='5';
console.log(x);
console.log(y);
console.log(x==5);  // shows true
console.log(y==5);   // shows true
console.log(x==y);   // shows true
console.log(0==false);  // shows true
console.log(1==true);   // shows true
console.log(0==0);      // shows true
console.log(NaN==NaN);   // shows false
console.log("\n");   

// Inequality (!=) operator compares the inequality of two operands

console.log(x!=6);   // shows true
console.log(y!=5);   // shows false
console.log(x!=y);   // shows false
console.log(NaN!=NaN);   // shows true
console.log(0!=false);   // shows false
console.log(1!=true);   // shows false
console.log(0!=null);   // shows false
console.log("\n"); 

// Strict Equality (===) operator compares the equality of two operands with type.

console.log(x===6);   // shows false
console.log(y===5);   // shows false
console.log(y==='5');   // shows true
console.log(x===y);   // shows false
console.log(0===false);   // shows false
console.log(1===true);       // shows false
console.log(0===null);   // shows false
console.log(x===6);   // shows false
console.log("\n"); 

// Strict Inequality (!==) operator compares the inequality of two operands with type.

console.log(x!==6);   // shows true
console.log(y!=='5');   // shows false
console.log(y!==5);   // shows true
console.log(0!==false);   // shows true
console.log(1!==true);   // shows true
console.log(NaN!==NaN);   // shows true
console.log(0!==null);   // shows true
console.log("\n"); 

// The Greater than Operator(>) is used to check whether the left-side value is greater than the right-side value.

console.log(x>0);   // shows true
console.log(y>0);   // shows true
console.log(x>"5");   // shows false
console.log(y>"5");   // shows false
console.log('2'>'12');   // shows true
console.log(y>'10');   // shows true because '5' and '10' are strings so it will compare the unicode values and unicode value of 5 is 53 and 1 is 49
console.log("abc">15);   // shows true
console.log("\n"); 

// Greater than or equal Operator (>=) is used to check whether the left side operand is greater than or equal to the right side operand.

console.log(x>=0);   // shows true
console.log(y>=0);   // shows true
console.log(x>=5);   // shows true
console.log(y>=5);   // shows true
console.log(y>="15");   // shows true
console.log(x>="15");   // shows false
console.log(y>=15);   // shows false
console.log('2'>=15);   // shows false
console.log("\n"); 

//The Less than Operator is used to check whether the left-side value is less than the right-side value.

console.log(x<15);  // shows true
console.log(y<"0");    // shows false     
console.log(x<"0");  // shows false
console.log(y<15);  // shows true
console.log('2'<15);   // shows true
console.log('abc'<15);   // shows false
console.log("\n"); 

// The Less than or equal Operator is used to check whether the left side operand value is less than or equal to the right side operand value.

console.log(x<=15);  // shows true
console.log(y<="0");     // shows false    
console.log(x<="0");    // shows false
console.log(y<=15);   // shows true
console.log('2'<=15);   // shows true
console.log('abc'<15);   // shows false
console.log("\n"); 
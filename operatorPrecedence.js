// Exponentiations are executed before multiplications
// ( * ) and ( / ) have higher precedence than ( + ) and ( - )

let a=2 + 3 * 4 / 3;
console.log(a);   //shows 6

let x = (100 + 50) * 3;
console.log(x);   //shows 450

let y = 100 / 50 * 3;
console.log(y);   //shows 6

//Postfix increments are executed before prefix increments
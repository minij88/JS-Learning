// Bitwise operators in JavaScript treat their operands as a set of 32-bit binary digits (zeros and ones) and perform operations at the bit level. 
// The result of these operations is shown as a decimal value.

// Bitwise AND Operator ( & )
// It is a binary operator that accepts two operands.
// Bit-wise AND (&) returns 1 if both the bits are set ( i.e 1) and 0 in any other case.

let x=5;
let y=3;
console.log(x&y);  //shows 1

// Bitwise OR Operator ( | )
// It is a binary operator that accepts two operands. 
// Bit-wise OR ( | ) returns 1 if any of the operands is set (i.e. 1) and 0 in any other case.

console.log(x|y);  // shows 7

// Bitwise XOR Operator ( ^ )
// It is a binary operator that accepts two operands. 
// Bit-wise XOR ( ^ ) returns 1 if both the operands are different and 0 in any other case.

console.log(x^y);  // shows 6

// Bitwise NOT Operator ( ~ )
// It is a unary operator i.e. accepts single operands. 
// Bit-wise NOT ( ~ ) flips the bits i.e 0 becomes 1 and 1 becomes 0.
// For any integer n, ~n = -(n + 1)

console.log(~12);  // shows -13

// Left Shift Operator ( << ) *2
// It's a binary operator i.e. it accepts two operands. 
// The first operator specifies the number and the second operator specifies the number of bits to shift. 
// Each bit is shifted towards the left and 0 bits are added from the right. 
// The excess bits from the left are discarded.

let aLeft = 4; 
console.log(aLeft << 1); 
console.log(aLeft << 4);

// Sign Propagating Right Shift Operator ( >> ) /2
// It's a binary operator i.e. it accepts two operands. 
// The first operand specifies the number and the second operand specifies the number of bits to shift. 
// Each bit is shifted towards the right, the overflowing bits are discarded.
// This is Sign Propagating as the bits are added from the left depending upon the sign of the number (i.e. 0 if positive and 1 if negative )

let aRight = 4; 
let bRight = -32 
console.log(aRight >> 1); 
console.log(bRight >> 4);

// Zero Fill Right Shift Operator ( >>> ) 
// It's a binary operator i.e. it accepts two operands. 
// The first operand specifies the number and the second operand specifies the number of bits to shift. 
// Each bit is shifted towards the right, the overflowing bits are discarded. 
// 0 bit is added from the left so its zero fill right shift.

let aZero = 4; 
let bZero = -1 
console.log(aZero >>> 1); 
console.log(bZero >>> 4);


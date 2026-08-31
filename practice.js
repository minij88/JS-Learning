/* let a=2;
let b= a++ + ++a; 
console.log(b);  //shows 6
b=--a + a--; 
console.log(b);  // shows 6

console.log(3.5/5);  //shows 0.7
console.log(3.5%5);   // shows 3.5 because if the first number is smaller than the second, the remainder is just the first number.
console.log(-3.5 % 5);  // -3.5
console.log(3.5 % -5);  // 3.5

let a1 = 2;
for (; ; a++) {
    console.log("Value of a:" + a);
    break;
} */

    let n=5;
 let num=1;
for(let s=1;s<=n;s++)
{
    let pattern6="";
    for(let t=1;t<=s;t++)
    {
       pattern6+=num+" ";
       num++;
    }
    console.log(pattern6);
}
let num1=1;
for(let x=1;x<=n;x++)
{
    let pattern="";
    for(let y=1;y<=n-x;y++)
    {
      pattern+=" ";
    }
      for(let z=1;z<=2*x-1;z++)
      {
        pattern+=num1+" ";
           num1++;
      }
   
    console.log(pattern);
}
for(let x=n-1;x>=1;x--)
{
  let pattern="";
  for(let y=1;y<=n-x;y++)
  {
    pattern+=" ";
  }
  for(let z=1;z<=2*x-1;z++)
  {
    pattern+="*";
  }
  console.log(pattern);
}


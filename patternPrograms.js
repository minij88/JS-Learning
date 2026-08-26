// Right-angled star triangle

let n=5;
for(let i=1;i<=n;i++)
{
    let pattern="";
    for(j=1;j<=i;j++)
    {
        pattern+="* ";
    }
    console.log(pattern);
}

// Inverted star triangle

for(let k=n;k>=1;k--)
{
let pattern1="";
for(let m=1;m<=k;m++)
{
    pattern1+="* ";
}
console.log(pattern1);
}

// Number triangle

for(let a=1;a<=n;a++)
{
    let pattern2="";
    for(let b=1;b<=a;b++)
    {
        pattern2 +=b+" ";
    }
    console.log(pattern2);
}

// Number triangle with same number in each row

for(let c=1;c<=n;c++)
{
    let pattern3="";
    for(let d=1;d<=c;d++)
    {
        pattern3 +=c+" ";
    }
    console.log(pattern3);
}

// Pyramid pattern

for(let x=1;x<=n;x++)
{
    let pattern4="";
    for(let y=1;y<=n-x;y++)
    {
      pattern4+=" ";
    }
      for(let z=1;z<=2*x-1;z++)
      {
        pattern4+="*";
      }
    
    console.log(pattern4);
}

// Inverted Pyramid

for(let p=n;p>=1;p--)
{
  let pattern5="";
  for(let q=1;q<=n-p;q++)
  {
    pattern5+=" ";
  }
  for(let r=1;r<=2*p-1;r++)
  {
    pattern5+="*";
  }
  console.log(pattern5);
}

//Floyd's triangle

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

// Inverted Floyd's triangle
 let num1=1;
for(let s=n;s>=1;s--)
{
    let pattern7="";
    for(let t=1;t<=s;t++)
    {
       pattern7+=num1+" ";
       num1++;
    }
    console.log(pattern7);
}


// Floyd's triangle from 15-1

 let num2=15;
for(let s2=n;s2>=1;s2--)
{
    let pattern8="";
    for(let t1=1;t1<=s2;t1++)
    {
       pattern8+=num2+" ";
       num2--;
    }
    console.log(pattern8);
}

// Program to print diamond of stars

 for(let x=1;x<=n;x++)
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


// Arrow functions are a shorter syntax for writing functions in JavaScript

const add=(a,b)=>{
    return a+b
};
console.log(add(5,3));     // shows 8

const greet=empName=>`Welcome ${empName}`;
console.log(greet("Aman"));                    // shows Welcome Aman

// Arrow functions without parameter

const hello=()=>{
    console.log("Hello");
}
hello();                    // shows Hello

// Arrow Function with Single Parameters

const square=x=>x*x;
console.log(square(4));           // shows 16

//Arrow Function with Multiple Parameters

const mutilply=(a,b,c)=>{
    console.log(a+b+c); 
}
mutilply(2,3,4);                     // shows 9

//  Arrow Function with Default Parameters

const addition=(x,y,z=30)=>{
     console.log(x+y+z); 
}
addition(10,20);     // shows 60 as z will take default value 30

// Arrow functions with implicit return

const multiple=number=>number*2;
console.log(multiple(5));    // shows and return 10 implicit as multiple function has single statement

const person=(firstName,lastName)=>
({
    first:firstName,last:lastName 
});
console.log(person("Shivam","Gupta"));    // shows { first: 'Shivam', last: 'Gupta' }

// An arrow function does not have its own this. It inherits this from the surrounding (lexical) scope.

const student={
studentName:"Riya",
greeting() {
    return this.studentName;
}
};
console.log(student.greeting());    // shows Riya

//Arrow function to find factorial of a number

const factorial=(number)=>{

    let answer=1;
    for(let i=number;i>=1;i--)
    {
        answer=answer*i;
    }
    return answer;
};
console.log(factorial(5));
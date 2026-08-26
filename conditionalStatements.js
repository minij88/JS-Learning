// Conditional statements allow you to make decisions in your code. 
// The if, else, and else if statements are used to control the flow of execution based on certain conditions.

let age=20;
if(age>18)
{
    console.log("Candidate is eligible to vote");
}

// The else statement follows an if statement and provides an alternative block of code to run when the condition in the if statement is false. 
// It is used for creating conditional logic that handles both cases (true and false).

let candidateAge=10;
if(candidateAge>18)
{
    console.log("Candidate is eligible to vote");
}
else
{
    console.log("Candidate is not eligible to vote");
}

// The else if statement allows you to check multiple conditions sequentially. 
// It can be used when you want to test more than one condition and handle each case with a different block of code.

let marks=65;
if(marks>90)
{
    console.log("Student is excellent");
}
else if(marks>70)
{
    console.log("Student is good");
}
else if(marks>50)
{
    console.log("Student is average");
}

// Find out the largest of the three numbers

let num1=20, num2=0, num3=-1;
if(num1>num2 && num1>num3)
{
    console.log(num1+" is largest");
}
else if(num2>num1 && num2>num3)
{
    console.log(num2+" is largest");
}
else
{
    console.log(num3+" is largest");
}

// The switch statement evaluates an expression and executes code based on matching cases. 
// It’s an efficient alternative to multiple if-else statements, improving readability when handling many conditions.
// The default keyword in a switch statement is used as a fallback option when none of the case labels match the evaluated value.

let day=20;
let dayName;
switch(day)
{
    case 1:
        dayName= "Monday";
        break;

    case 2:
        dayName= "Tuesday";
        break;
    
    case 3:
        dayName= "Wednesday";
        break;

    case 4:
        dayName= "Thursday";
        break;
    
    case 5:
        dayName="Friday";
        break;
    
    case 6:
        dayName= "Saturday";
        break;

    case 7:
        dayName= "Sunday";
        break; 

    default:
        dayName = "Invalid day";       
}
console.log(dayName);

// In some situations, multiple case labels in a switch statement require the same block of code to be executed. 
// Instead of repeating the same code for each case, we can group them together.

let grade="B"
let result;
switch(grade)
{
    case 'A':
    case 'B':
    case 'C':    
        result="Grade is good";
        break;

    case 'D':
       result="Grade is Poor"; 
       break;

    default:
        result="No grade is achieved";
        break;
}
console.log(result);

// switch without break
// If break is omitted, execution will proceed to the next case clause, even to the default clause.

let message;
switch(2)
{
    case 1:
        message="One";
    case 2:
        message="Two";
    case 3:
        message="Three";  
    default:
        message="Invalid";    
}
console.log(message);

// Calculator program using Switch case and function

function Calculator(number1,number2,operator)
{
    let answer;
    switch(operator)
{
    case '+':
    answer=number1+number2;
    break;

    case '-':
    answer=number1-number2;
    break;

    case '*':
    answer=number1*number2;
    break;

    case "/":
    answer=number1/number2;
    break;

    case '%':
    answer=number1%number2;
    break;

    default:
        answer="Invalid operator";
}
return answer;
}
console.log("Addition of 10 and 5 is "+Calculator(10,5,'+'));
console.log("Subtraction of 10 and 5 is "+Calculator(10,5,'-'));
console.log("Multiplication of 10 and 5 is "+Calculator(10,5,'*'));
console.log("Division of 10 and 5 is "+Calculator(10,5,'/'));
console.log("Modulus of 10 and 5 is "+Calculator(10,5,'%'));

// Calculator program by giving user input at run time using prompt()
// User input at run time means the program asks the user to enter information while the program is running, instead of giving the values beforehand.
// prompt() is used to give user input at run time
// prompt() gives the input as a string, so we use Number() to convert numbers like "10" into 10.
// The prompt() method displays a dialog box that prompts the user for input.
// The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.

/*let name = window.prompt("Enter your name:");
//let firstNumber=parseInt(prompt("Enter first number"));
//let secondNumber=prompt("Enter second number");
//let operator1=prompt("Enter operator('+','-','*','/')");
let output;

switch (operator1) 
{
    case "+":
        output = firstNumber + secondNumber;
        break;

    case "-":
        output = firstNumber - secondNumber;
        break;

    case "*":
        output = firstNumber * secondNumber;
        break;

    case "/":
        output = firstNumber / secondNumber;
        break;

    default:
        result = "Invalid operator";
}
console.log("Result is", output); */

// Leap year program 

const prompt = require('prompt-sync')(); 
let year = Number(prompt("Enter a year:"));
if((year%4==0)&&(year%100!=0)||(year%400==0))
{
    console.log("Year entered is leap year"); 

}
else{
    console.log("Year entered is not leap year"); 

} 

// using switch case by giving user input

let color=prompt("Enter the color");
switch(color)
{
case "Red":
    console.log("Stop");
    break;
case "Yellow":
    console.log("Wait");
    break;
case "Green":
    console.log("Go") ;
    break;
default:
    console.log("Invalid input"); 
    break;
}
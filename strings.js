// A string is a sequence of characters used to represent text in JavaScript.
// You can create strings using single quotes, double quotes, or backticks.

let fname="Mini";
let city='Agra';
let grade=`A`;
console.log(fname);  
console.log(city);
console.log(grade);

let str = new String("Hello");
console.log(str);     // shows [String: 'Hello']
console.log(typeof str); //  shows "object"

// String Properties and methods

let text="Hello JavaScript";
console.log(text.length); // shows 16        // it returns the length of string
console.log(text.charAt(4));  // shows o     // it returns the character at particular index
console.log(text.charAt());  // shows H      // it takes 0 as default index 
console.log(text.toUpperCase());  // shows HELLO JAVASCRIPT    // it converts the string in uppercase
console.log(text.toLowerCase());  // shows hello javascript   // it converts the string in lowercase
console.log(text.startsWith('H')); // shows true             // it checks whether the string starts from the given character
console.log(text.startsWith('h')); // shows false 
console.log(text.startsWith('O'));  // shows false
console.log(text.endsWith("t"));   // shows true         // it checks whether the string ends from the given character
console.log(text.endsWith("T")); // shows false 
console.log(text.endsWith(" ")); // shows false st

let newText=" Hello Playwright ";
console.log(newText);
console.log(newText.trim()); // shows Hello Playwright           // it removes whitespaces from beginning and end
console.log(newText.trim(1));   // shows Hello Playwright        // trim ignores parameter
console.log(newText.trimStart());                                // method removes whitespace from the beginning (start) of a string.
console.log(newText.trimEnd());                                  // method removes whitespace from the end of a string.
console.log(newText.replace("Hello","Hi")); // Hi Playwright    // it replaces the text with the new one.

// charCodeAt() returns the UTF-16 code unit at a specified index in a string.

console.log(newText.charCodeAt(1));  // shows 72 
console.log(newText.charCodeAt(20)); // shows NaN
console.log(newText.charCodeAt());  // shows 32 as UTF code of space is 32.

// indexOf() in JavaScript is used to find the position (index) of a value inside a string or array.

console.log(newText.indexOf("H"));    // shows 1
console.log(newText.indexOf("h"));   // shows 15
console.log(newText.indexOf(" "));  // shows 0
console.log(newText.indexOf("A"));  // shows -1       as index for A is not found
console.log(newText.indexOf("5"));  // shows -1       as 5 doesn't exist
console.log(newText.indexOf("h",1));

// lastIndexOf() in JavaScript is used to find the last occurrence of a value in a string or array.

console.log(newText.lastIndexOf("l"));  // shows 8
console.log(newText.lastIndexOf("m"));  // shows -1 as index for A is not found

// substring() in JavaScript is used to extract a part of a string.

console.log(newText.substring(1,5));  // shows Hell 
console.log(newText.substring(1));  //  Hello Playwright 
console.log(newText.substring(5,1));  // shows Hell 
console.log(newText.substring(-3,5));  // shows  Hell 

// The slice() method is used to extract a portion of a string and return it as a new string without changing the original string.

let textIndia="I love my India";
console.log(textIndia.slice(0,5));            // shows I lov
console.log(textIndia.slice(7));             // shows my India 
console.log(textIndia.slice(-5));           // shows India  
console.log(textIndia.slice(7,2));         // shows blank space 

console.log(textIndia.split(" "));        // shows [ 'I', 'love', 'my', 'India' ]  
console.log(textIndia.split(""));        // shows ['I', ' ', 'l', 'o','v', 'e', ' ', 'm',y', ' ', 'I', 'n','d', 'i', 'a']
console.log(textIndia.split(" ",2));    // shows [ 'I', 'love' ] 

// String Comparison Using ===
let str1 = "Hello";
let str2 = "Hello";
console.log(str1===str2);           // shows true           // it checks both value and data type

let str3 = "Hello";
let str4 = "hello";
console.log(str3===str4);           // shows false        // JS comparison is case sensitive

console.log("10" === 10); // show false
console.log("10" == 10);   // shows true     

// localeCompare() is a JavaScript string method used to compare two strings according to language/locale sorting rules.

let a='apple';
let b='banana';
console.log(a.localeCompare(b)); // returns -1
console.log(b.localeCompare(a));  // returns 1
console.log('apple'.localeCompare(a));  // returns 0

// Case-Insensitive Comparison in JavaScript
// A case-insensitive comparison means comparing strings without considering uppercase and lowercase differences.

let str5 = "Hello";
let str6 = "hellO";
console.log(str5.toLowerCase() === str6.toLowerCase());  // shows true
console.log(str5.toUpperCase() === str6.toUpperCase());  // shows true

// String Concatenation means joining two or more strings together to form one string.
// Using the + operator

let firstName="Mini";
let lastName="Jain";
let fullName=firstName+" "+lastName;
console.log(fullName);             // shows Mini Jain

// Backticks allow you to insert variables directly using ${}:

console.log(`My first name is ${firstName} and last name is ${lastName}`); // shows My first name is Mini and last name is Jain

// Using concat method

let userName="David";
let userAge="20";
let newUser=userName.concat(" ",userAge);
console.log(newUser);      // shows David 20

console.log("10" + 5);  // shows 105
console.log(10 + 5);    // shows 15

let textNew = "Hello";
textNew = "Y" + textNew.slice(1);
// textNew[0] = "Y";    // shows Hello
console.log(textNew);   // shows Yello

// Converting String to Numbers

let num="10";
console.log(typeof num);   // shows string
let numConvert=Number(num);
console.log(typeof numConvert);   // shows number

// Number() method to convert a string to a number
let age = "25";
console.log(age);
let numAge = Number(age);
console.log(numAge);
console.log(typeof age);   // shows string
console.log(typeof numAge);    // shows number

// parseInt() converts a string into an integer (whole number).
let value="30";
console.log(parseInt(value));  // shows 30
let value1=20.45;
console.log(parseInt(value1));   // shows 20

// parseFloat() converts a string into a decimal number.
let value2="20.45";
console.log(parseFloat(value2));   // shows 20.45

console.log("20"+5);             // shows 205
console.log(Number("20")+5);    // shows 25

let x="20";
let y=10;
console.log(x+y);   // shows 2010
console.log(x-y);   // shows 10
console.log(x*y);   // shows 200
console.log(x/y);   // shows 2

// Converting strings to arrays

let cityName="Kanpur";
let cityArray=cityName.split("");
console.log(cityArray);   //  shows [ 'K', 'a', 'n', 'p', 'u', 'r' ]

let cityName1="Lucknow,Agra,Delhi";
let cityArray1=cityName1.split(",");
console.log(cityArray1);   // shows [ 'Lucknow', 'Agra', 'Delhi' ]
let cityArray2=cityName1.split(".");
console.log(cityArray2);   // shows [ 'Lucknow,Agra,Delhi' ]    // there is no (dot) in the string, the entire string remains as one array element.

// Array.from() method

let strNew="India";
let strArray=Array.from(strNew);
console.log(strArray);   // shows [ 'I', 'n', 'd', 'i', 'a' ]

// spread operator
let strArray1=[...strNew];
console.log(strArray1);   // shows [ 'I', 'n', 'd', 'i', 'a' ]


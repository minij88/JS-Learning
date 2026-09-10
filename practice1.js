try
{
console.log("First try block");
let answer=10/0;
console.log(answer);
}
/*catch
{
console.error("First catch block");
}*/
finally{
console.log("First finally block");
}

let value2="20";
console.log(parseFloat(value2));

function addNoArgNoReturn()
{
     let firstNumber=50;
    let secondNumber=90;
    function callback()
    {
       return(firstNumber+secondNumber);
    }
    callback();
}
addNoArgNoReturn();


let newText=" Helloh Plhaywright ";
console.log(newText.indexOf("h",1));
/*console.log(newText.indexOf("5"));
console.log(newText.trim(1));  */

/* let arrayNested=[[1,"a","b"],[2,3,4],5,6];
let valueNested=arrayNested[2].shift();
console.log(valueNested);
console.log(arrayNested); */

let cities=["Agra","Delhi","Mumbai","Gangtok","Shillong","Rajkot"];
cities.splice();
console.log(cities);

let array1=[10,20,30,40,50];
console.log(array1[10]);

let str3 = "Hello";
let str4 = "hello";
console.log(str3!=str4);

let str5="India";
let str6= new String("India");
let str7="India";
let str8= new String("India");
console.log(str5===str6);
console.log(str5===str7);
console.log(str6===str8);
console.log(str6==str8);
console.log(str5==str6);

function hi() {
    console.log("Hello");
}

function hi() {
    console.log("Hi");
}

hi();

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter(); // 1
counter(); // 2
counter();





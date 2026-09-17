// it allows an array or string in separate objects

let numbers=[1,2,3,4,5];
let maximum=Math.max(...numbers);
console.log(maximum);               // shows 5

let studentName="Aditya";
let letters=[...studentName];            
console.log(letters);              // shows [ 'A', 'd', 'i', 't', 'y', 'a' ]

let lettersNew=[...studentName].join("-");            
console.log(lettersNew);              // shows A-d-i-t-y-a

// creating identical array or shallow copy of an array means different array with same elements

let fruits=["Apple","Mango","Banana","Grapes"];
let fruitsNew=[...fruits];
console.log(fruitsNew);

// combined two or more arrays 

let cities=["Agra","Delhi","Kanpur","Banglore"];
let states=["UP","New Delhi","Karnataka","Bihar"];
let arrayCombined=[...cities,...states];
console.log(arrayCombined);

// add extra elements after combining arrays

let arrayCombinedNew=[...cities,...states,"Lucknow","Punjab"];
console.log(arrayCombinedNew);

// combining two objects

const car={
    brand:"Verna",
    model:"Hyundai",
    color:"Black"
};

const carType={
    type:"car",
    year:"2024",
    color:"red"
}
const myCar={...car,...carType};
console.log(myCar);                    // if two objects has same key then last one will overwrite the previous one

// Passing Array Elements as Function Parameters

function add(firstNumber,secondNumber,thirdNumber)
{
    return firstNumber+secondNumber+thirdNumber;
}
let arrayNumber=[10,20,30];
console.log(add(...arrayNumber));       // shows 60
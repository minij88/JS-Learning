// An object in JavaScript is used to store data in key-value pairs.

let student={
    name:"Aman",
    age: 20,
    city: "Delhi"
}
console.log(student);    // shows { name: 'Aman', age: 20, city: 'Delhi' }

// Accessing object properties
console.log(student.name);
console.log(student.age);
console.log(student.city);   

console.log(student["name"]);
console.log(student["age"]);
console.log(student["city"]); 

// change the property of an object
student.name="Anil";
console.log(student.name);  

// Add a new property to an object
student.subject="Maths";
console.log(student);     // shows { name: 'Anil', age: 20, city: 'Delhi', subject: 'Maths' }

// delete a property of an object
delete student.age;
console.log(student);    // shows { name: 'Anil', city: 'Delhi', subject: 'Maths' }

// object containing an array
let employee={
    empName:"Mini",
    empCode:21323,
    empCity:["Delhi","Agra","Mathura"]
}
console.log(employee);
console.log(employee.empCity[1]);  // shows Agra
console.log(employee.empCity["a"]);    // shows undefined
employee.empCity.push("Kanpur");     // add Kanpur at last index in empCity array
console.log(employee);

// empty object
let teacher={
}
console.log(teacher);   // shows {}

// object methods are functions stored as properties of an object.
let emp={
    ename:"Kunal",
    greet:function()
    {
        console.log("Hello");
    }
}
emp.greet();    // shows Hello

let emp1={
    ename1:"Ajay",
    greet()
    {
        console.log("Heyyyyyy");
    }
}
emp1.greet();       //shows Heyyyyyy

// Using this-> this usually refers to the object that called the method

let person={
    pname:"Shikha",
    page:20,
    information()
    {
      console.log(`My name is ${this.pname} and age is ${this.page}`);
    }
}
person.information();     // shows My name is Shikha and age is 20

// Methods with Parameters

let calculator={
    add(a,b)
    {
        return(a+b);
    },
    multiply(a,b)
    {
        return(a*b);
    },
    subtract(a,b)
    {
        
    },
    divide(a,b)
    {
      return
    }
}
console.log(calculator.add(5,3));            // shows 8
console.log(calculator.multiply(7,3));      // shows 21
console.log(calculator.add());             // shows NaN
console.log(calculator.add(5));           // shows NaN
console.log(calculator.add(-3));         // shows NaN
console.log(calculator.subtract());     // shows undefined
console.log(calculator.divide());       // shows undefined
console.log(calculator.divide(20,10));   // shows undefined

// Nested objects

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
let employee
{
    empName="Mini",
    empCode=21323,
    empCity=["Delhi","Agra","Mathura"]
}
console.log(employee);
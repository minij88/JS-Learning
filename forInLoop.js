// for in loop iterates over Property keys (indexes or object keys)
// It returns key/indexes
// It works with array and objects

// for in loop with objects
const person={
    name:"Aman",
    age: 20
};
for(let key in person)
{
    console.log(key,person[key]);
} // shows name Aman age 20

// for in loop with arrays

const arr=[1,2,3,4];
for(let index in arr)
{
    console.log(index);
} // shows 0 1 2 3

const arr1=["a","b","c"];
for(let index1 in arr)
{
    console.log(index1);
}  //shows 0 1 2 3


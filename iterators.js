// A JavaScript iterator is an object that allows sequential access to elements of a collection such as arrays, strings, maps, or sets
// done: A boolean flag (true or false) indicating if the sequence is finished

const numbers=[10,20,30,40,50];
const iterator=numbers[Symbol.iterator]();
console.log(iterator.next());                 // { value: 10, done: false }
console.log(iterator.next());                 // { value: 20, done: false }
console.log(iterator.next());                 // { value: 30, done: false }
console.log(iterator.next());                 // { value: 40, done: false }
console.log(iterator.next());                 // { value: 50, done: false }
console.log(iterator.next());                // { value: undefined, done: true }

function createSimpleIterator(array) 
{
  let index = 0;
  return {
    next: function() {
      if (index < array.length)
     {
        return{ 
            value: array[index++],
             done: false
         };
      } else 
        {
        return { value: undefined,
             done: true };
      }
    }
  };
}
const myIterator=createSimpleIterator(["Agra","Bhopal","Chennai","Dehradun"]);
console.log(myIterator.next().value);        // Agra
console.log(myIterator.next());            //{ value: 'Agra', done: false }
console.log(myIterator.next());            // { value: 'Bhopal', done: false }
console.log(myIterator.next());            // { value: 'Chennai', done: false }
console.log(myIterator.next());            //  { value: 'Dehradun', done: false }
console.log(myIterator.next());            //  { value: undefined, done: true }

console.log(myIterator.next().value);
// A Set is a collection of unique values and duplicates are automatically removed..

const numbers= new Set([1,2,3,4])
console.log(numbers);             // shows Set(4) { 1, 2, 3, 4 }

const fruits= new Set();

fruits.add("Apple");
fruits.add("Mango");
fruits.add("Pear");
fruits.add("Banana");

console.log(fruits.has("Mango"));   // shows true
console.log(fruits.has("apple"));   // shows false
console.log(fruits.has(""));        // shows false
console.log(fruits.has("1"));       // shows false
console.log(fruits.has(" "));       // shows false
console.log(fruits.has("!"));       // shows false

fruits.delete("Banana");
console.log(fruits);                // Set(3) { 'Apple', 'Mango', 'Pear' }

console.log(fruits.size);          // shows 3

// comparison between Sets and Arrays

const myArray=[1,2,3,4,5,4,4,3,1,2,5,6,3,2];
const mySet=new Set(myArray);

console.log(myArray);    // shows [1,2,3,4,5,4,4,3,1,2,5,6,3,2]
console.log(mySet);      // shows Set(5) { 1, 2, 3, 4, 5, 6}

console.log(myArray[1]);     // shows 2
console.log(mySet[1]);       // shows undefined as in set is unordered so 1 here doesnt retrieve element at index 1

mySet.add("6");
mySet.add({channelName:"Javascript"});
mySet.add([10,11,12]);

// Create unique array from Set using Spread operator

const uniqueArray=[...mySet];
console.log(uniqueArray);       // shows [ 1, 2, 3, 4, 5, 6 ]

// clear method to empty the set

mySet.clear();
console.log(mySet);       // shows Set(0) {}

// A Map stores key-value pairs.

const myMap= new Map([["empName","Shikha"],["empCode","63631"]]);
console.log(myMap);                 // shows Map(2) { 'empName' => 'Shikha', 'empCode' => '63631' }

// JS objects supports only one key objects and it only remembers the last one

const myObject={};
const a={};
const b={};

myObject[a]="a";
//console.log(myObject);      // shows { '[object Object]': 'a' }

myObject[b]="b";
console.log(myObject);       // shows { '[object Object]': 'b' }   here b overwrites a

const myMapObject= new Map([[a,"a"],[b,"b"]]);         
console.log(myMapObject);                     // shows Map(2) { {} => 'a', {} => 'b' }

// Set method in map is used to assign key value pairs of our set

myMapObject.set({},"c");
console.log(myMapObject);             // shows  Map(3) { {} => 'a', {} => 'b', {} => 'c' }

myMapObject.delete(a);
console.log(myMapObject);            // Map(2) { {} => 'b', {} => 'c' } it deletes by matching key

myMapObject.delete(1);
console.log(myMapObject);            // shows Map(2) { {} => 'b', {} => 'c' }

myMapObject.delete();
console.log(myMapObject);           // shows Map(2) { {} => 'b', {} => 'c' }

console.log(myMapObject.has(a));   // shows false
console.log(myMapObject.has(b));    // shows true
console.log(myMapObject.has());      // shows false
console.log(myMapObject.has("a"));    // shows false

console.log(myMapObject.size);        // shows 2

myMapObject.clear();
console.log(myMapObject);  
     

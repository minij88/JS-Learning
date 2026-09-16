//A Promise is an object representing a value that we will get in the future.It acts as a placeholder for a value that is not available yet.
// Every Promise is always in one of three states:Pending, Fulfilled and Rejected

// Creating Promise and getting result with .then()

const promise= new Promise((resolve,reject)=>{
resolve("Success");
});
promise.then((message)=>{
    console.log(message);
})                                   // shows Success as the value passed to resolve() becomes the value received by .then().

// reject() means operation is failed

const promiseMessage=new Promise((resolve,reject)=>{
reject("Operation Failed");
});
promiseMessage
.then((result)=>{
console.log(result);
})
.catch((error)=>{
console.log(error);
});                        // shows Operation Failed

// Login program using Promise

const loginPromise= new Promise((resolve,reject)=>{
const loggedIn=true;
if(loggedIn)
{
    resolve("Login successfull");
}
else
{
    reject("Login failed");
}
});
loginPromise
.then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(error);
});

// Program to check even number using Promise

const evenPromise=new Promise((resolve,reject)=>{
let number=23;
if(number%2==0)
{
    resolve("Number is divisible by 2");
}
else
{
    reject("Number is not divisible by 2");
}
});
evenPromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
     console.error(error);
});

const timeoutPromise= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("Data recieved");},2000);
});
timeoutPromise
.then((message)=>{
console.log(message);
});                        // shows Data recieved as promise changes from Pending to fullfiled

// Promise chaining  means running multiple asynchronous operations one after another, where the result of one Promise is passed to the next .then().
// Whatever you return from a .then() becomes the value received by the next .then().

const promiseNumber= Promise.resolve(10);
promiseNumber
.then((value)=>{
    console.log(value);
    return value*2;                  // shows 20
})
.then((value)=>{
   console.log(value);
    return value+5;                 // shows 25
})
.then((value)=>{
   console.log(value);
});
// Async/Await in JavaScript allows you to write asynchronous code in a clean, synchronous-like manner
// When you put async before a function, that function always returns a Promise.

async function greet() {
    return "Hello";
}
greet().then(result=>{
    console.log(result);
})                          // shows Hello

// The await keyword pauses the execution of an async function until a Promise is resolved or rejected.

async function weather()
{
let delhiWeather= new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("30 degree")
},2000)
})

let bangloreWeather= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("20 degree")
    },3000)
})
let delhiW= await delhiWeather;
let bangloreW= await bangloreWeather;
return[delhiW,bangloreW];
}

let a=weather();
a.then(answer=>{
    console.log(answer);
})                     // shows [ '30 degree', '20 degree' ]

function walkDog() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
     const dogWalked=false;
     if(dogWalked)
     {
         resolve("Dog walk")
     }
     else
     {
        reject("Dog didn't walk");
     }
        },1500)
    });
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const kitchecnClean=true;
     if(kitchecnClean)
     {
         resolve("Kitchen is clean")
     }
     else
     {
        reject("Kitchen is not clean");
     } 
    },2000)
    });
}
async function dochores()
{
    try{
    const walkdogResult= await walkDog();
    console.log(walkdogResult);

    const cleanKitchenResult= await cleanKitchen();
    console.log(cleanKitchenResult);
    }
  catch(error)
  {
    console.error(error);
  }
}
dochores();
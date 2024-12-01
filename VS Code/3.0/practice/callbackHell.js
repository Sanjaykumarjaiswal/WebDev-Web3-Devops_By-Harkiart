

//It is a callback hell 

// setTimeout(function(){
//     console.log("hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Hi there");
//         },5000)
//     },3000)
// },1000)

//using promisified way

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     })
// }

//promise Chaining


// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi there");
//         });
//     });
// });

//Now we will solve using async and await:

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}


//syntactically sugar.

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hi there");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}

    solve();
    console.log("after solve function");





 
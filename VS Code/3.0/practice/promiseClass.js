// function logName(){
//     console.log("hyy");
// }

// setTimeout(logName,3000);//will call logName function in future after 3 sec

//returns an object of the promise class
// function setTimeoutPromisified(ms){
//     let p=new Promise(resolve=>setTimeout(resolve,ms));
//     return p;
// }
// function callback(){
//     console.log("3 seconds have passed");

// }

// setTimeoutPromisified(3000).then(callback);

function random(){


}

let p= new Promise(random);//supposed to return you something
 

function callback(){
    console.log("Promise succeeded");
}
p.then(callback);
function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}

function callback(){
    console.log("3 second has been passed");
}

setTimeoutPromisified(3000).then(callback); 
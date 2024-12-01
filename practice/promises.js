function myOwnSetTimeout(duration){
    let p=new Promise(function(resolve){
        setTimeout(resolve,1000)
    })
    return p;
}

function promisifiedMyownSetTimeout(duration){
    let p=new Promise(function(resolve){
        setTimeout(resolve,1000)
    })
    return p;
}

promisifiedMyownSetTimeout(1000).then(function(){
    console.log("I learned the promisified way")
})

myOwnSetTimeout(1000).then(function(){
    console.log("log the first thing")
})



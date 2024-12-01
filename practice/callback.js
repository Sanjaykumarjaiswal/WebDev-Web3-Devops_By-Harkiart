// function myOwnSetTimeout(fn,duration){
//     setTimeout(fn,duration);
// }

// myOwnSetTimeout(function(){
//     console.log("hi")
// },1000)
const fs=require('fs')
function read(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
}
// const content=fs.readFile("a.tx","utf-8",read)

const content1=fs.readFile("a.txt","utf-8",read)
const content2=fs.readFile("b.txt","utf-8",read)
console.log("Done")

const fs=require("fs");

fs.readFile("a.tx","utf-8",function(err,data){
    if(err) {
        console.log("error")
    }
    else{
        console.log(data)
    }
})
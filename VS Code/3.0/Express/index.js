//creating an http server
//express
//is express a node library => No(It doesnot come  bundled with node)

const express=require("express");

const app=express();

function sum(n){
    let ans=0;
    for (let i=0;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
//req=>reques    res=>respond
 
app.get("/",function(req,res){
    const n=req.query.n;
    let ans=sum(n)
    res.send("your answer is "+ ans);
})

// app.listen(3000);
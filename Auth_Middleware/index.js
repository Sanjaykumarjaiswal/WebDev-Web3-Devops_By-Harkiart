const express = require("express");
const jwt=require("jsonwebtoken")
const JWT_SECRET="sanjay"

let users=[];

const app=express()

app.use(express.json())



app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"you have signed up"
    })

})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
            foundUser=users[i];
        }
    }

    if(foundUser){
        const token=jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token:token
        })
    }
    else{
        res.json({
            message:"Invalid Credentials"
        })
    }
})

function auth(req,res,next){
    const token=req.headers.token;
    const decodedData=jwt.verify(token,JWT_SECRET)

    if(decodedData.username){
        req.username=decodedData.username;
        next()
        }
      else{
        res.json({
            message:"invalid"
        })
    } 
}

app.get("/me",auth,function(req,res){

    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username=== req.username){
            foundUser=users[i];
        }
    }
})
app.listen(3000)    
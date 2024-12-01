const express=require("express");
const jwt=require("jsonwebtoken");

const JWT_SECRET="sakjcnxzXMw;NFKSVCDMLZ"//KEY

const app=express();
app.use(express.json());

const users=[];
/*

[
    username{username:"harkirat",password:"1232123"}
]

*/




app.post("/signup",function(req,res){ 
    const username=req.body.username;
    const password=req.body.password

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"your signed up"
    })

    console.log(users);


})


app.post("/signin",function(req,res){ 
    const username=req.body.username;
    const password=req.body.password;

    // const user=users.find(function(u){
    //     if(u.username==username && u.password==password){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     

    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            foundUser=users[i];
        
    }
    }

    if(foundUser){
        const token=jwt.sign({
            username:username},JWT_SECRET)//convert their username to jwt 
        
        res.json({
            message:token
        })
    }
    else{
        res.status(403).send({
            message:"Invalid Username or Password"
        })

    }
    console.log(users)
    })

 app.get("/me",function(req,res){
    const token=req.headers.token;//jwt
    const decodedInformation=jwt.verify(token,JWT_SECRET); 
    const username=decodedInformation.username ;


    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser=users[i];
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }
    else{
        res.json({
            message:"token Invalid"
        })
    }
 })   
   




app.listen(3000);//that the http server is listening on port 3000;
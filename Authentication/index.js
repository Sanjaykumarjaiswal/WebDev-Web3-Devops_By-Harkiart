const express=require("express");

const app=express();
app.use(express.json());

const users=[];
/*

[
    username{username:"harkirat",password:"1232123"}
]

*/

//should return random long string
function generateToken(){
   let options= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'];

   let token="";
   for(let i=0;i<=options.length;i++){
    token=token+options[Math.floor(Math.random()*options.length)];
   }
   return token;

}


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
        const token=generateToken();
        foundUser.token=token;
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
    const token=req.headers.token;
    let foundUser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
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
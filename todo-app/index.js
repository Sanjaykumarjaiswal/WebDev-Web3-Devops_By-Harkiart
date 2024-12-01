const express = require("express");

const app=express();
//Now define all your route handlers


//  / route
// GET method 

app.get("/",function(req,res){
    
    res.send("hello world!");
    // res.send("hello world!");


    //cannot send response twice

    
})

app.listen(3000); //which port
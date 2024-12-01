const express=require("express")
const Router=express.Router
const {userModel}=require("../db")

const userRouter=Router();


userRouter.post("/signup",async function(req,res){
    // const {email,password,firstName,lastName}=req.body
    const email=req.body.email;
    const password=req.body.password;
    const firstname=req.body.firstName;
    const lastName=req.body.lastName;
    //Todo:adding zod validation
    //todo:hash the password so plaintext pw is not stored in db
    //todo:put inside a try catch block
    await userModel.create({
       /*
        email,
        password,
        firstname,
        lastName
        
        these both the things do the same thing
        */
       
        email:email,
        password:password,
        firstName:firstname,
        lastName:lastName

        

       
    
    })
    
    res.json({
        message:"signup succeded"
       })
    })


userRouter.post("/signin",function(req,res){
    res.json({
        message:"signin endpoint"
    })
    
    })
userRouter.get("/purchase",function(req,res){
        //give all the courses purchased
    res.json({
        message:"course purchase endpoint"
    })
    })

module.exports={
    userRouter:userRouter
}
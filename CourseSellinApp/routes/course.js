const express=require("express")
const Router=express.Router;

const courseRouter=Router()

courseRouter.post("/purchase",function(req,res){
    res.json({
        message:"Purchase endpoint"
    })
    })
courseRouter.get("/preview",function(req,res){
    res.json({
        message:"preview endpoint"
    })
    })

module.exports={
    courseRouter:courseRouter
}
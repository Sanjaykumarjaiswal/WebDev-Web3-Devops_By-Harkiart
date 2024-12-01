const express=require("express")
// const { createUserRoute } = require("./routes/user")
// const {createUserRoute, createCourseRoute} =require("./routes/course")
const mongoose=require("mongoose")
const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/course")
const {adminRouter}=require("./routes/admin")


const app=express()

// createUserRoute(app)
// createCourseRoute(app)

app.use("/api/v1/user",userRouter)
app.use("/api/v1/course",courseRouter)
app.use("/api/v1/admin",adminRouter)

async function main(){
    //figure out what is dotenv
     await mongoose.connect("mongodb+srv://sanjaykumarjaiswal61:6QMQwVTc5uXzm8xQ@cluster0.ebgvi.mongodb.net/coursera-app")
    app.listen(3000)
    console.log("I am listening on port 3000")
}
main();
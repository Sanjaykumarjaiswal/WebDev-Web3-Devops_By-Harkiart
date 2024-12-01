const express =require("express")

const app=express();

 let count=0;

function increaseCount(){
    count+=1;
    console.log(`your opened this ${count} times`);

}

app.get("/sum",function(req,res){
    increaseCount();
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer:a+b
    })
})

app.get("/multiply",function(req,res){
    increaseCount();
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer:a*b
    })
})
app.get("/divide",function(req,res){
    increaseCount();
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer:a/b
    })
})
app.get("/subtract",function(req,res){
    increaseCount();
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer:a-b
    })
})
// app.listen(3001);
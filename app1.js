const express=require('express')

const app=express()

app.listen(3000,()=>{
 console.log("App is running on port 3000")
});

app.get('/products',(req,res)=>{
   res.json(["Iphone","Tab"]);
})

app.get('/package',(req,res)=>{
    res.sendFile(__dirname+'/package.json');
 })
 

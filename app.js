const express=require('express') // mvc framework expressJS
const app=express();   //creationg reference of express and assign to app variable

const port= process.env.PORT||8080;
// if the enviroment variable exists, use the valu else use the default value 8080
app.listen(port,()=>{
 console.log('App running on port ')
});

/* http://localhost:8080/ */
app.get('/',(req, res)=>{
  res.sendFile(_dirname+'/login.html')
});

/* http://localhost:8080/products */
app.get('/products',(req, res)=>{

});

/* http://localhost:8080/login */
app.get('/login',(req, res)=>{

});
import express from 'express';
const app=express();

app.get('/',(req,res)=>{
res.send("hello world");
});

app.get('/api/:name/:age',(req,res)=>{
    res.send(`Hello ${req.params.name} and age is ${req.params.age}`)
})

app.get('/api',(req,res)=>{
//   const data=req.query;
//   const {name="ananya",rollno=100}=req.query;
//     res.send(`Hello ${name} and roll number is ${rollno}`);

//http://localhost:3000/api?name=Ananya&rollno=879
try{
  const data=req.query;
  const {name="ananya",rollno=100}=req.query;
 if(!name){
res.send({status:404,message:"Name required"})
 }else{
    res.send(`Hello ${name} and roll number is ${rollno}`);
 }
}catch(error){
    console.log(error.message)
}
    });    
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
});


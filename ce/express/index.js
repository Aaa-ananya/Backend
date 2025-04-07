const express=require('express')
// const path=require('path')
const app=express();
const port=3000;
app.use(express.json())
// app.get('/api/aboutus',(req,res)=>{
//     res.sendFile(path.join(__dirname,"home.html"))
// })//data ko read karna
// //server sending msg to client
// const ananya=[{
//     name:"kuhu"
// }]
// app.get('/about',(req,res)=>{
//     // res.send("this is my about page")
//     // res.json(ananya)
//     res.sendFile(path.join(__dirname,"about.html"))
// })
// app.get('/contact',(req,res)=>{
//     // res.send("this is my about page")
//     // res.json(ananya)
//     res.sendFile(path.join(__dirname,"contact.html"))
// })
app.post('/api/abes',(req,res)=>{
    
    res.json({})
})

app.listen(port,()=>{
    console.log(`App is running on ${port}`)  
})
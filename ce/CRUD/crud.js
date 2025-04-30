const express=require('express')
const app=express();
app.use(express.json());
const port=3000;

const database=[{id:1,name:"ananya",age:20},
    {id:2,name:"stuti",age:17}
]
//CREATE
app.post('/users',(req,res)=>{
    const newuser={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age,
    }
    database.push(newuser)
    res.status(201).json(newuser);
})

//READ-->readall
app.get('/users',(req,res)=>{
    res.json(database);
})
//read one
app.get('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const user=database.find(u=>u.id==userid)
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message:"User not Found"})
    }
})

//update
app.put('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);
    const userIndex=database.findIndex(u=>u.id===userid)
    if(userIndex!=-1){
        database[userIndex]={...database[userIndex],...req.body}
        res.json(database[userIndex])
    }else{
        res.status(404).json({message:"user not found"})
    }
})
//delete
app.delete('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const userindex=database.findIndex(u=>u.id==userid)
    if(userindex!=-1){
        const deleteuser=database.splice(userindex,1);
        res.json(deleteuser)
    }else{
        res.status(404).json({message:"user not found"})
    }
})

app.listen(port,()=>{
    console.log("chl rha hu maii");
})
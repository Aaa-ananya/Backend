const { log } = require('console');
const fs=require('fs/promises');
const read=async()=>{
   const data=await  fs.readFile("./data.txt",'utf-8');
   console.log(data);
}
const write=async()=>{
    const newdata='This is new data on 12 feb';
    const data=await  fs.writeFile("./data1.txt",newdata,'utf-8');
 }
read();
write();
console.log(1);
console.log(2);



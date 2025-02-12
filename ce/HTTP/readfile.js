const fs=require('fs/promises');
const data="";
const read=async()=>{
   data=await  fs.readFile("./home.html",'utf-8');
   module.export=data
//    console.log(data);
}
// const write=async()=>{
//     const data=await  fs.writeFile("./http_plain.js",data,'utf-8');
//  }
read();
// write();

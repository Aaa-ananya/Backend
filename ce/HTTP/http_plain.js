const http=require('http');
const fs=require('fs/promises');
const server=http.createServer(async (req,res)=>{
console.log(req.url);
res.statusCode=200;
res.setHeader('Content-type','text/html');
res.write('Hello World');
const data=await fs.readFile('./home.html','utf8')
res.end(data);
});
// PORT=3001;
server.listen(()=>{
   const a= server.address();
console.log(`server is running on ${a.port}`);
});

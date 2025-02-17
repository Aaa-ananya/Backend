const http = require('http');
const fs=require('fs/promises')

const server = http.createServer(async(req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    const filedata= await fs.readFile('./aa.json','utf-8');
const parsedata=json.parse(filedata);
// const newdata=users.map((user)=>{
//     return user.name;
// })
    // let newdata = [];
    // users.forEach((user) => {
    //     newdata.push(user.name);
    // });
    res.end(JSON.stringify(parsedata));
    
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});



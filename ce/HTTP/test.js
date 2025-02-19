const http=require('http');
const fs=require("fs/promises");
const server = http.createServer(async (req, res) => {
    
    if(req.url == '/'){
        res.setHeader('Content-Type', 'application/json');
        let users = await fs.readFile("./aa.json", "utf-8");
        res.end(JSON.stringify(users));
    }
    else if(req.url == '/home'){
        let page = await home();
        res.setHeader('Content-Type', 'text/html');
        res.end(page);
    }
    else{
        let page = await error();
        res.setHeader('Content-Type', 'text/html');
        res.end(page);
    }
});
async function home(){
    const data = await fs.readFile("./home.html", "utf-8");
    return data;
}
async function error(){
    const data = await fs.readFile("./error.html", "utf-8");
    return data;
}
PORT =3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
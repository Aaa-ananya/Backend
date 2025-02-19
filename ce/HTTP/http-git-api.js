const http=require('http');
const axios=require('axios')
const server = http.createServer(async(req,res)=>{
    console.log('new request recieved');
    res.writeHead(200,{'Content-type':'text/html'});
    // const response=await fetch("https://dummyjson.com/products");
    // const data=await response.json();
     const response=await axios.get("https://api.github.com/search/users?q=location:najibabad");
    const adata=response.data.items;
    let frontdata=`<html><head></head><body>`
    adata.forEach(users=> {
        frontdata+=`<div><img src=${users.avatar_url}></div>`
    });
    frontdata+=`</body></html>`
    res.end(frontdata);
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


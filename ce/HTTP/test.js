const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    let filedata;
    let contentType;

    try {
        if (req.url == '/') {
            filedata = await fs.readFile('./aa.json', 'utf-8');
            contentType = 'application/json';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(filedata);
        } else if (req.url == '/home') {
            filedata = await fs.readFile('./home.html', 'utf-8');
            contentType = 'text/html';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(filedata);
        } else {
            filedata = await fs.readFile('./error.html', 'utf-8');
            contentType = 'text/html';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(filedata);
        }
    } catch (error) {
        filedata = await fs.readFile('./error.html', 'utf-8');
        contentType = 'text/html';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(filedata);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
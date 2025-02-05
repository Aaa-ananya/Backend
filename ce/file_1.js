const fs=require('node:fs');          //file system import
// const data=fs.readFileSync('./data.txt');
// console.log(data.toString());

const data=fs.readFileSync('./data.txt','utf-8');
console.log(data);

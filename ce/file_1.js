const fs=require('node:fs');          //file system import\
//****************************************Read file*********************************************** */
// const data=fs.readFileSync('./data.txt');
// console.log(data.toString());


const data=fs.readFileSync('./data.txt',{encoding:'utf-8'});
console.log(data);
if(data.match("h")){
    console.log('h is present');
    data.replace("h","ABCD");
    fs.writeFileSync('./data.txt','changedata');
}

//*******************************************Write File************************************** */

// fs.writeFileSync('./data1.txt','CE')
// fs.appendFileSync('./data1.txt','appended')

//*******************************************Rename File************************************** */

// fs.renameSync('./data1.txt','./data2.txt')

//*******************************************Delete File************************************** */

// fs.unlinkSync('./data2.txt')

//*******************************************Delete File************************************** */

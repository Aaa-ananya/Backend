const mongoose=require('mongoose')
async function dbConn(){
    const conn=mongoose.connect(`mongodb://localhost:27017/studentapp`);
    if(conn){
        console.log(`Database connected successfully`);
    }else{
        console.log(`Connection failed`);
        }
}
module.exports=dbConn;
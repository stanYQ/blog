let fs = require('fs');
module.exports = {
    read:(filename,callback)=>{
        fs.readFile(filename,(err,data)=>{
            if(err){
                throw err;
            }
            callback(data);
        }) 
    }
}
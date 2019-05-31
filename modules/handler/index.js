//负责主页的业务逻辑处理
let config = require('../../config');
let tools = require('./tools');
module.exports = {
    index:(req,res)=>{
       tools.read(config.viewsPath + '/index.html',(data)=>{
           res.end(data);
       })
    }
}
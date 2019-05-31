let tools = require('./tools');
let config = require('../../config');
module.exports = {
    index:(req,res)=>{
        tools.read(config.viewsPath + '/about.html',(data)=>{
            res.end(data);
        })
    }
}
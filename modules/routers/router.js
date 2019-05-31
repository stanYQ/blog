let express = require('express');
let config = require('../../config');
let index_handler = require('../handler/index');
let about_handler = require('../handler/about')
module.exports = (app)=>{
    app.use(express.static(config.publicPath));
    //主页路由
    app.get('/',(req,res)=>{
        index_handler.index(req,res)
    });

    //关于我的路由
    app.get('/about',(req,res)=>{
        about_handler.index(req,res);
    })
}
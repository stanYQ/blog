let express = require('express');
let router = require('./modules/routers/router');
let config = require('./config');
let app = express();

router(app);

app.listen(config.port,()=>{
    console.log(`sever is running path:http://localhost:${config.port}`);
})
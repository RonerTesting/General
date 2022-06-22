const express = require("express")

function routerApi(app){
    const router = express.Router();
    app.use('/files/data',router)
}


module.exports = routerApi;
//엄격한 코드 검사
'use strict';

/************* include library **************/
var express             = require('express');
var path                = require('path');
var server              = express();
var axios               = require('axios')

/************* view engine setup **************/
server.set('views', path.join(__dirname, '/web'));

server.set('view engine', 'ejs');
server.engine('html', require('ejs').renderFile);

/************* Routing **************/
//client Index
server.get('/', (req, res, next) => {

    axios.get('http://localhost/htyapi').then((Response)=>{
        //console.log(Responses.data);

        //va arrData = 
        //npm install axios
        var arrData = {
            "data" : Response.data
        }
        //console.log(arrData);
        res.render("clientList.html", arrData);
    }).catch((Error)=>{
        console.log(Error);
    })
})

module.exports =server;
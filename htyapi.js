//엄격한 코드 검사
'use strict';

/************* include library **************/
var express = require('express');
var mysql   = require('mysql');
var api     = express();
//var db      = require('./db');


var connection = mysql.createConnection({
    host     : 'ls-712a3de0f216372c332622b5ed5c6f22fe2f67bd.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    user     : 'dbmasteruser',
    password : 'buackr!!##',
    database : 'BU'
});

/************* Routing **************/
//api Index
api.get('/', (req, res, next) => {


/*var dbInfo = {

    host: ' ls-712a3de0f216372c332622b5ed5c6f22fe2f67bd.cu0xyssgzj43.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'dbmasteruser',
    password:'buackr!!##',
    database: 'BU',
    multipleStatements: true
}
*/

    connection.connect();
    db.query('SELECT * FROM sensor_data ', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
        //console.log(results);
        
    });
    connection.end();    
});

/************* Routing **************/
//api Index

// get
api.get('/hello2', (req, res, next) => {
    var pId = "0";
    if(req.query.id !== null && req.query.id !== undefined){
        pId = req.query.id;
    }

    res.send("510호 강의실 시설 좋아요"+ pId);
});
// post
api.post('/hello', (req, res, next) => {
    var pId = "0";
/*
    name ,
    number 
*/
    console.log("body.id = "+req.body.id);
    if(req.body.id !== null && req.body.id !== undefined){
        pId = req.body.id;
    }    
    res.send("백석대학교 :"+ pId + "정보는? ");
});

api.get('/insSensor', (req, res, next) => {

    var sensorType = req.query.sensorType;// "";
    var sensorValue = req.query.sensorValue;//"";
    var userId = req.query.userId; //"";

    console.log(req.query.name);
    let student = {
        id : 0,
        name : "test",
        age : 5
    }
    

    if(req.query.id !== null && req.query.id !== undefined){
        student.id = req.query.id;
    }
    if(req.query.name !== null && req.query.name !== undefined){
        student.name = req.query.name;
    }

    if(req.query.age !== null && req.query.age !== undefined){
        student.age = req.query.age;
    }

    var sql = " insert into sensor_data (sensor_type, sensor_value, sensor_user, ins_date ) values ";
    sql += " ('"+ sensorType +"', "+ sensorValue +", '"+ userId +"', now()) ";
    console.log(sql);

    console.log("init start");
    connection.query(sql , function(error, results, fields){

        console.log(error);
        console.log(results);
        res.send(results);
    })

});

//Query String
// ex) http://localhost/api/echo?param1=123&param2=321
api.get('/query_echo', (req, res, next) => {
    res.send(req.query);
});


module.exports = api;
// 231654984321
// res.send(results)
//hty11131202s

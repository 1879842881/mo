var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root'
})


router.post('/insert', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    var cc=req.body.text;
    con.query('INSERT INTO taoqi.insert(name) VALUES("'+cc+'")',function(err,data){
        res.send(data)
    })
});
/* GET home page. */
router.post('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*')
    con.query('SELECT * FROM taoqi.insert',function(err,data){
        res.send(data)
    })
});


module.exports = router;
/**
 * Created by xxxx on 2017-10-31.
 */

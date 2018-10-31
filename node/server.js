var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();




module.exports = router;

var app = express();


// 专门处理post请求的
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/index', function (req, res) {
    
    res.append("Access-Control-Allow-Origin", "*");
    //通过request请求发起http请求，请求后台的数据
    var data = req.query;
    topic(data)
    function topic(data) {
        // if (error) throw error;
        request(`https://m.benlai.com/home/getBanners?offset=${data.offset}&categorySysNo=${data.categorySysNo}`, function (error, response, body) {

            res.send(body)
            console.log(body)
        })
    }

})

app.post('/get', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var data = req.query;
    topic(data)
    function topic(data) {
        // if (error) throw error;
        request(`https://api1.34580.com/sh/Home/AdvertisementPhotoshootRequest?sourcetype=${data.sourcetype}&json=${data.json}`, function (error, response, body) {

            res.send(body)
            console.log(body)
        })
    }

})


//监听端口
app.listen(3000);

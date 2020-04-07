var express = require('express')
var app = express()
var request = require('request')
app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("search")
})
app.get('/results',function(req,res){
    var search = req.query.Search
    var url = 'http://www.omdbapi.com/?s='+search+'&apikey=bbda6fda'
    request(url, function(error, response, body){
        
        if(!error && response.statusCode == 200){
            var responseData = JSON.parse(body)
            res.render("results", {movieData : responseData})
        }
    })
})
app.listen(process.env.PORT,function(){
    console.log('App has been started.....')
})

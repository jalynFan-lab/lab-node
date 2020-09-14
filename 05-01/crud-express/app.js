var express = require('express')
var fs = require('fs')
var app = express()
//配置模版引擎以及body-prase要在路由之前
var bodyParser = require('body-parser')
var router = require('./router')

//配置body-parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/node_modules/',express.static('./node_modules/'))

app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

app.use(router)

app.listen(8080,function(){
    console.log('app is running on ...')
})

module.exports = app

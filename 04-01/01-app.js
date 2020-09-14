//1.引包
var express = require('express')

//2.创建服务器
// 相当于http.createServer
var app = express()

//开放某个资源
app.use('./public',express.static('./public'))

//访问某个url路径
app.get('/',function(req,res){
    res.send('hello express')
})

app.listen(8080,function(){
    console.log('app is running ...')
})
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
//配置art-template
//建立文件与express-art-template的联系
app.engine('html',require('express-art-template'))
//开放资源被页面使用
app.use('/public/',express.static('./public/'))

//配置body-parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var comments=[
    {
        name:'潘潘',
        message:'我在生气',
        dateTime:'Sat Sep 05 2020'
    },
    {
        name:'潘潘',
        message:'我很生气',
        dateTime:'Sat Sep 05 2020'
    },
    {
        name:'潘潘',
        message:'我快气炸了',
        dateTime:'Sat Sep 05 2020'
    }
    

]

app.get('/',function(req,res){
    res.render('index.html',{
        comments:comments
    })
})

app.get('/post',function(req,res){
    res.render('post.html')
})

app.post('/post',function(req,res){
    var comment=req.body
    var myDate = new Date();
    comment.dateTime=myDate.toDateString()
    comments.unshift(comment)
    //通过服务器让客户端重定向
    //1.设置302的状态码
    //res.statusCode=302
    //2.在响应头中通过Location告诉客户端向哪里重定向
    //res.setHeader('Location','/')
    res.redirect('/')
})

app.listen(8080,function(){
    console.log('app is running')
})
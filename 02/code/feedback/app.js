//app

var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')
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
    }
]
//server启动和创建的简约写法
http
    .createServer(function(req,res){
        
        //url模块的url parse方法将路径解析为一个容易操作的对象 true表示查询字符串转化为对象
        var parseObj = url.parse(req.url,true)

        var pathname=parseObj.pathname

        if(pathname === '/'){
            fs.readFile('./views/index.html',function(err,data){
                if(err){
                    return res.end('404 not found page')
                }
                var htmlStr=template.render(data.toString(),{
                    comments:comments
                })
                res.end(htmlStr)
            })
        }else if(pathname === '/post'){
            fs.readFile('./views/post.html',function(err,data){
                if(err){
                    return res.end('404 not found page')
                }
                res.end(data)
            })
        }else if(pathname === '/comment'){
            //res.end(JSON.stringify(parseObj.query))一次请求对应一次响应
            //将当前日期添加到数据对象query中，然后存储到comments数组中
            var comment=parseObj.query
            var myDate = new Date();
            comment.dateTime=myDate.toDateString()
            comments.unshift(comment)

            //通过服务器让客户端重定向
            //1.设置302的状态码
            res.statusCode=302
            //2.在响应头中通过Location告诉客户端向哪里重定向
            res.setHeader('Location','/')
            res.end()
        }else if(pathname.indexOf('/public/') === 0){
            fs.readFile('.'+pathname,function(err,data){
                if(err){
                    return res.end('404 not found page')
                }
                res.end(data)
            })
        }else(
            //其他处理
            fs.readFile('./views/404.html',function(err,data){
                if(err){
                    return res.end('404 not found page')
                }
                res.end(data)
            })
        )
      
})
    .listen(8080,function(){
        console.log('server running...')
    })
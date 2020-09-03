//art-template
//1.安装：npm install art-template 
//2.命令在哪执行就下载到哪
//3.使用引擎的API

//node中使用模版引擎
//1.require来加载art-template
var template = require('art-template')
var fs = require('fs')

var http = require('http')
var server = http.createServer()
server.on('request',function(req,res){
    console.log('request starting')
    fs.readFile('./tpl.html',function(err,data){
        if(err){
            return console.log("cannot find data")
        }
    
        var ret = template.render(data.toString(),{
            name: 'panpan',
            age: 18,
            provience: '山东省',
            hobbies: [
            '打游戏',
            '吃汉堡',
            '睡懒觉'
            ]
        })
        
        res.end(ret)
    })
})
server.listen(8080,function(){
    console.log('server is running...')
})


   



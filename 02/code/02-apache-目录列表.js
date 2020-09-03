//实际未写完，只为看逻辑

var http=require('http')
var fs=require('fs')
var server=http.createServer()

server.on('request',function(req,res){
    var url=res.url
    //1.读取模版文件
    fs.readFile('temale.html ',function(err,data){
        if (err) {
            return res.end('404 not found')
        }
        
        //2.1读取实际文件夹
        fs.readdir('/Users/hankyozei/Desktop/工作相关/转职',function (err,files){
            if (err) {
                return res.end('目录不存在')
            }
            //2.2生成需要替换的文字串
            var content = ''
            files.forEach(function (item) {
                content+=``
            })
            //2，3替换
            data=data.toString
            data=data.replace('&&&',content)
            console.log(data)
            //3，发回替换后的响应数据
            res.end(data)
        })

    })
    
})

server.listen(8080,function(){
    console.log('server is going on')
})
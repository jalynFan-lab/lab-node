//node的核心模块
//1.加载http模块
 var http=require('http')

 //2.构造一个WEBserver

 var　server=http.createServer()
 //3.使用Webserver提供服务

 server.on('request',function(){
     console.log("收到请求了")
 })
 //4.绑定端口，启动服务器
server.listen(8080,function(){
    console.log("服务器启动成功了")
})
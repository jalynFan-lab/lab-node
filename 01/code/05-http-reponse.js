const { request } = require("http");

var http=require('http')

var server=http.createServer()

server.on('request',function(request,reponse){

console.log("收到服务器的请求了，请求路径是："+request.url)
if (request.url=="/love") {
    //解决乱码 content-type 发送过来的数据内容是什么类型
    //text-plain普通文本
    reponse.setHeader('Content-Type','text/plain;charset=utf-8')
    reponse.end('FANFAN love 潘潘')
}else if (request.url=="/put") {
    //发起的是html文本用text-html
    reponse.setHeader('Content-Type','text/html;charset=utf-8')
    reponse.end('<a href="">put it here</a>')
}else if (request.url=="/delete") {
    reponse.end("delete resource")
}else if (request.url=="/haha") {
    reponse.end("hahah resource")
}else {
    reponse.end("404 not found")
}
})

server.listen(8080,function(){
console.log("服务器启动了")
})
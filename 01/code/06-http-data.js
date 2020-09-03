var http=require('http')

var server=http.createServer()

server.on('request',function(request,respond){

    console.log("server get request,url:"+request.url)
    console.log("remoteaddress:"+request.socket.remoteAddress+",remotePort:"+request.socket.remotePort)
    var url=request.url

    if(url=="/products"){
        var products=[
            {
                name:"Pan",
                price:1
        
            },
            {
                name:"Wen",
                price:2
        
            },
            {
                name:"Qi",
                price:3
        
            }
        ]

        respond.end(JSON.stringify(products))

    }
})

server.listen(8080,function(){
    console.log("server is going on ...")
})


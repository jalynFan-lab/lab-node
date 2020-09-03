//node 的fs核心模块中有读取文件相关的API
//fs require来读取文件


//1，使用require方法加载fs核心模块
var fs =require('fs')

//2，读取文件
//参数：1-要读取的文件的路径 
//2-回调函数
//  读取成功：
// data 数据 error null
//  读取失败：
// data null error 错误对象
fs.readFile('helloworld.txt','utf-8',function(error,data){
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})
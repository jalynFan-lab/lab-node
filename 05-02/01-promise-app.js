var fs = require('fs')

var p = new Promise(function(resolve,reject){
    fs.readFile('./test.txt','utf-8',function(err,data){
       
        if(err){
            //reject 方法就是then第二个参数
            reject(err)
        }else{
            //resolve 方法就是then第一个参数
            resolve(data)
        }
    })
})


var p1 = new Promise(function(resolve,reject){
    fs.readFile('./testp.txt','utf-8',function(err,data){
       
        if(err){
            //reject 方法就是then第二个参数
            reject(err)
        }else{
            //resolve 方法就是then第一个参数
            resolve(data)
        }
    })
})
p.then(function(data){
console.log(data)
//return promise对象的时候后续的then的第一个参数会用p1的结果
return p1
},function(err){
console.log(err)   
}).then(function(data){
    console.log(data)
    //return promise对象的时候后续的then的第一个参数会用p1的结果
    },function(err){
    console.log(err)   
    }

)
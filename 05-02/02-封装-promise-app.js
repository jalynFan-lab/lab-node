var fs = require('fs')

function preadFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf-8',function(err,data){
           
            if(err){
                //reject 方法就是then第二个参数
                reject(err)
            }else{
                //resolve 方法就是then第一个参数
                resolve(data)
            }
        })
    })
}



preadFile('./test.txt').then(function(data){
console.log(data)
//return promise对象的时候后续的then的第一个参数会用p1的结果
return preadFile('./testp.txt')
},function(err){
console.log(err)   
}).then(function(data){
    console.log(data)
    //return promise对象的时候后续的then的第一个参数会用p1的结果
    },function(err){
    console.log(err)   
    }

)
var fs=require('fs')

fs.readdir('/Users/hankyozei/Desktop/工作相关/转职',function (err,files){
    if (err) {
        return console.log('目录不存在')
    }

    console.log(files)
    
})
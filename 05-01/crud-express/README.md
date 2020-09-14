# 04-02
## 4.2.1 路由模块
+ 使用路由模块来存储get，post等路由请求防止出现文件庞大的情况
+ 如何建立入口app.js与router.js的联系？
    + 在rounter.js中加载express，使用封装的rounter方法
    + 1.创建一个路由容器
    + 2.把路由器挂载到router路由容器中
    + 3.把router导出通过modules.exports
    + 4.把路由器挂载到app中通过app.use（）
+ 未使用路由模块的情况
    ``` javascript
    //router.js
    module.exports = function(app){

    app.get('/',function(req,res){
        fs.readFile('./db.json','utf-8',function(err,data){
            if(err){
                return res.status(500).send('server error')
            }
            //从文件中读取的是字符串要转化为对象使用
            var students=JSON.parse(data).students
            res.render('index.html',{
                students:students
            })
        })
        
    })
    }
    //app.js
    var express = require('express')
    var fs = require('fs')
    var app = express()
    var router = require('./router')
    app.use('/node_modules/',express.static('./node_modules/'))
    app.use('/public/',express.static('./public/'))

    app.engine('html',require('express-art-template'))

    router(app)

    app.listen(8080,function(){
        console.log('app is running on ...')
    })

    //异步实例
    function fn(callback){
    setTimeout(function (){
        var data = 'hello'
        callback(data)
    },1000)
    }

    fn(function(data){
    console.log(data)
    })

### 步骤
+ 处理模版 app.js
+ 配置和开放静态资源 app.js
+ 配置模版引擎 app.js
+ 简单路由，渲染静态页面 router.js
+ 路由设计 router.js
+ 提取路由模块 
+ 单独写一文件处理数据 student.js
    + find
    + save
    + updateByID
    + deleteByID
+ 实现具体功能 student.js
    + 通过路由获取具体请求
    + 请求接收到的数据 get，post
        + req.query req.body
    + 调用数据操作API处理数据
    + 根据操作结果给客户端发送响应

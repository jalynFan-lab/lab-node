### 4.1 express-art-template

+ Install
    ``` javascript
    npm install --save art-template
    npm install --save express-art-template
+ 配置
    ```javascript
    //第一个参数指的是被渲染的文件结尾是什么类型的文件
    app.engine('html', require('express-art-template'))
+ 使用
    ``` javascript
    app.get('/',function(req,res){
        //express 默认会去项目中的views目录找index.html
    res.render('index.html',{
        title : 'hello
    })
+ 如果希望修改默认的视图渲染路径
    ``` javascript
    app.set('views',目标路径)
})
### 4.2 在express中获取get的数据
+ 使用req.query
### 4.3 在express中获取post的数据
+ express中没有相关的API需要另外安装
+ 安装 npm install --save body-parse
+ 配置 
    ``` javascript
    var express = require('express')
    var bodyParser = require('body-parser')

    var app = express()
    //配置body-parser
    // 只要加上这个配置就会在req请求对象上多出来一个属性：body
    // 也就是说可以用req.body来获取post表单获取的数据
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    
+ 使用 
    ``` javascript
    app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
    })


### 4.4 文件操作路径 模块操作路径
+ 模块加载中的相对路径./不能省，文件路径可省
### 4.5 修改完代码自动重启
+ 第三方工具nodemon自动重启服务器
+ 安装
    ``` javascript
    npm install --global nodemon
+ 使用
    ``` javascript
    nodemon app.js
### 4.6 静态服务
    ``` javascript 
    app.use(express.static('public'))
    app.use(express.static('files'))

    app.use('/public',express.static('public'))
    //a 代替public
    app.use('/a',express.static('public'))
    app.use('/static',express.static(path.join(_dirname,'public)))



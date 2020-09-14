# 05 
## 5.1 异步调用
+ 得到某函数内部异步操作的结果：setTimeout,readFile,writeFile,ajax需要用回调函数
    ``` javascript
   function add(x,y,callback){
       setTimeout(function (){
           var ret = x+y
        callback(ret)
       },10000)
   }
   add(10,20,function(ret){
       concole.log(ret)
   })
+ 封装ajax
    ``` javascript
    function get(url,callback){
        var oRep = new X
    }
    get('data.json',function(data){
        concole.log(data)
    })
## 5.2 package-lock.json
+ npm5之前没有

# MongoDB
## 5.3 关系型数据库和非关系型数据库
+ 关系型数据库：
    ++ sql语法
    ++ 设计表结构
    ++ 约束
+ 非关系型数据库
    ++ 键值对
## 5.4 开启和关闭数据库
+ 开启：mongod
    修改默认数据存储目录的话：mongod --dbpath=路径
+ 关闭：ctrl+c
## 5.5 连接数据库
+ mongo
## 5.6 退出数据库
+ exit
## 5.7 基本命令
+ show dbs 查看所有数据库
+ use 切换到指定的数据库（如果没有会新建）
+ db 查看当前数据库
+ 插入数据
## 5.8.1 mongodb 调用以及设计数据库

    ``` javascript
    var mongoose = require('mongoose')
    //test指的是数据库的名称
    mongoose.connect('mongodb://localhost:27017/test')

    var User=mongoose.model('User',{
        username: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        },email:{
            type:String
        }
    })
    //或者
    var mongoose = require('mongoose')
    //test指的是数据库的名称
    mongoose.connect('mongodb://localhost:27017/test')

    var Schema = mongoose.Schema

    var userSchema = new Schema({
        username: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        },email:{
            type:String
        }
    })
    var User=mongoose.model('User',userSchema)



## 5.8.2 插入数据
    ``` javascript
    //将文档结构userSchema发布为模型model
    // mongoose.model
    //参数一：传入一个大写单数名词表示数据库名称，mongodb会自动将大写名词字符串转换成小写复数的集合名称User-->users
    //参数二：userSchema
    //返回值：模型构造函数User

    //*******保存数据库
    //拥有模型构造函数，使用它对Users集合中的数据为所欲为
    var admin = new User({
        username:'pan',
        password:'123',
        email:'admin@admin.com'
    })
    //实例化需要save
    admin.save(function(err,ret){
    if(err){
        console.log('save fail')
    }else{
        console.log('save success')
        console.log(ret)
    }
    })
## 5.8.2 查询数据库
``` javascript
//查询所有
User.find(function(err,ret){
    if(err){
        console.log('find fail')
    }else{
        console.log('find success')
        console.log(ret)
    }
})
//条件查询
User.findOne({username:'pan'},function(err,ret){
    if(err){
        console.log('find fail')
    }else{
        console.log('find success')
        console.log(ret)
    }
})
## 5.8.3 删除数据
``` javascript
User.deleteOne({username:'rui'},function(err){
if(err){
    console.log('delete fail')
}else{
    console.log('delete success')
}
})
## 5.8.4 更新数据
``` javascript
//更新数据
User.findByIdAndUpdate('5f5b53e21b39eb018e8a4f72',{
email:'fan@gmail.com'
},function(err){
    if(err){
        console.log('update fail')
    }else{
        console.log('update success')
        
    }
})

## mongoose
+ mongoDB 官方有mongodb包来操作mongodb数据库，但是比较原始
+ mongoose 是第三方包基于mongodb做了进一步的封装
+ mongoose 使用：设计schema 发布mondel 接下来增删改查
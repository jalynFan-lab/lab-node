var mongoose = require('mongoose')
//test指的是数据库的名称
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})

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


//将文档结构userSchema发布为模型model
// mongoose.model
//参数一：传入一个大写单数名词表示数据库名称，mongodb会自动将大写名词字符串转换成小写复数的集合名称User-->users
//参数二：userSchema
//返回值：模型构造函数User

//*******保存数据库
//拥有模型构造函数，使用它对Users集合中的数据为所欲为
// var users=[{
//     username:'fan',
//     password:'123',
//     email:'pan@admin.com'
// },{
//     username:'ju',
//     password:'123',
//     email:'pan@admin.com'
// },{
//     username:'rui',
//     password:'123',
//     email:'pan@admin.com'
// }]

//保存需要save
// User.insertMany(users,function(err,ret){
// if(err){
//     console.log('save fail')
// }else{
//     console.log('save success')
//     console.log(ret)
// }
// })

//查询数据库
//查询所有
// User.find(function(err,ret){
//     if(err){
//         console.log('find fail')
//     }else{
//         console.log('find success')
//         console.log(ret)
//     }
// })

//条件查询
User.findOne({username:'99'})
    .then(function(user){
        if(user){
          console.log("user is existing")
        }else{
            return new User({
                username:'test',
                password:'123',
                email:'123@admin.com'
            }).save()
        }
    })
    .then(function(ret){

    })

//删除数据
// User.deleteOne({username:'rui'},function(err){
//     if(err){
//         console.log('delete fail')
//     }else{
//         console.log('delete success')
//     }
// })



//更新数据
// User.findByIdAndUpdate('5f5b53e21b39eb018e8a4f72',{
// email:'fan@gmail.com'
// },function(err){
//     if(err){
//         console.log('update fail')
//     }else{
//         console.log('update success')
        
//     }
// })

User.find()
.then(function(data){
    console.log(data)
})
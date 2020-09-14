var fs = require('fs')

//设计操作数据的API，不管业务
var dbPath =  './db.json'
//获取列表
exports.find = function (callback){
    fs.readFile(dbPath,function(err,data){
        if (err) {
            return callback(err)
        }
        callback(null,JSON.parse(data).students)
    })
}
//find By ID
exports.findByID = function (id,callback){
    fs.readFile(dbPath,function(err,data){
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var ret = students.find(function(item){
            return item.id ===  id
        })
        callback(null,ret)
    })
}

//添加保存
exports.save = function (student,callback){
 
//读取文件
    fs.readFile(dbPath,'utf-8',function(err,data){
        if (err) {
            return callback(err)
        }
        //从文件中读取的是字符串要转化为对象使用
        var students = JSON.parse(data).students
        
        student.id = (Number(students[students.length-1].id)+ 1).toString()
        students.push(student)

        //对象转换为字符串
        var fileData = JSON.stringify({
            students:students
        })
        //将字符串写入到json文件
        fs.writeFile(dbPath,fileData,function(err,data){
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}
//更新
exports.updateByID = function (student,callback){
    fs.readFile(dbPath,'utf-8',function(err,data){

        if (err) {
                return callback(err)
        }
        var students = JSON.parse(data).students

        var stu=students.find(function(item){
        return item.id === student.id
        })

        for (var key in student){
            stu[key] = student[key]
        }
        console.log(stu)
        //对象转换为字符串
        var fileData = JSON.stringify({
            students:students
        })
        //将字符串写入到json文件
        fs.writeFile(dbPath,fileData,function(err,data){
            if (err) {
                return callback(err)
            }
            callback(null)
        })

    })
}
//删除
exports.deleteByID = function (id,callback){
    fs.readFile(dbPath,function(err,data){
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        var deleteID = students.findIndex(function(item){
            return item.id === id
        })
        students.splice(deleteID,1)
        var fileData = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,fileData,function(err,data){
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}



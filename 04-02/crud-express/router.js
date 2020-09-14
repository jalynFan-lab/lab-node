var express = require('express')
var fs = require('fs')
var Students = require('./student ')

/*
    + 1.创建一个路由容器
    + 2.把路由器挂载到router路由容器中
    + 3.把router导出通过modules.exports
    + 4.把路由器挂载到app中通过app.use（）
**/
//1.创建一个路由容器
var router = express.Router()
//2.把路由器挂载到router路由容器中
    router.get('/students',function(req,res){
        Students.find(function(err,students){
            if(err){
                return res.status(500).send('server error')
            }
            //从文件中读取的是字符串要转化为对象使用
            
            res.render('index.html',{
                students:students
            })
        })
        
    })
    router.get('/students/new',function(req,res){
        res.render('new.html')
    })

    router.post('/students/new',function(req,res){
        Students.save(req.body,function(err){
            if(err){
                return res.status(500).send('server error')
            }
            res.redirect('/students')
        })
    })
    router.get('/students/edit',function(req,res){
        //从页面获取id
        var id = req.query.id
        Students.findByID(id,function(err,student){
            if(err){
                return res.status(500).send('server error')
            }
            res.render('edit.html',{
                student:student
            })
        })
    })
    router.post('/students/edit',function(req,res){
        
        //获取表单数据
        Students.updateByID(req.body,function(err){
            if(err){
                return res.status(500).send('server error')
            }
            res.redirect('/students')
        })
        //更新
        //回复响应
        
    })
    router.get('/students/delete',function(req,res){
        var id = req.query.id
        Students.deleteByID(id,function(err){
            if(err){
                return res.status(500).send('server error')
            }
            res.redirect('/students')
        })
    })
    //3.把router导出通过modules.exports
module.exports = router


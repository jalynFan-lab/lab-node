##  3.0.1 模块系统

+ EcmaScript语言
  + 和浏览器不一样没有Dom，Bom

+ 核心模块 
  +  文件操作fs
  + http服务的http
  + url路径操作模块
  +  path路径处理模块
  + os系统信息模块

+ 第三方模块
  + art-template
  + 必须通过npm下载才可以

+ 自定义模块
  + 自己写的模块文件

## 3.0.2 什么是模块化（node）

+ 文件作用域
  +外部加载得不到
+ 通信规则
  + 加载require
  + 导出exports
    + exports是一个对象可以多次为对象增加成员
    + 如果需要对于一个模块就只得到一个方法或者成员，就是不是挂载而是直接导出的时候需要使用module.exports=对象
    + module.exports=exports 两个是等价的
    + 当需要导出单个对象module.exports=XXX
    + 导出多个成员module.exports={

    } 
    + 或者exports.XXX=XXX
    + 每个模块都有moudle对象，每个对象都有exports对象。
    + return module.exports
### 3.0.3 jquery的each与js的foreach的区别
+ foreach因为是es5提供的不兼容IE8以下的版本
+ Jquery是由jquery这个第三方库提供的所以可以兼容低版本 Jquery的实例对象不能使用foreach方法如果使用要转为数组
+ [].slice.call(jquery 实例对象)
### 3.1 require方法加载规则
+ 核心模块
  + 模块名
+ 第三方模块
  + 模块名
+ 自定义模块
  + 路径

+ 优先从缓存加载
  + 参考03-02优先缓存  
+ 判断模块标识符：非路径的模块标识
  + 核心模块：本质是文件
    + 模块名
  + 第三方模块：需要被下载，使用require来加载使用02/code/node_modules/art-template/package.json文件中的main属性
  main属性中记录了art-template的入口模块index.js
  然后加载这个第三方包没有的话就往上级找node_modules否则就上上级
    + 模块名
  + 自定义模块
    + 路径
### 3.2 npm node package manager
+ npm install pa pb pc
### 3.2.1 npm命令
+ 升级：npm install --global npm
+ 常用命令：
  + 跳过向导快速生成：npm init -y
  + npm install 包名 
    + 只下载
  + npm install --save 包名
    +下载并保存包名依赖
  + npm uninstall --save 包名
    +删除并删除报名依赖
  + npm config list
    + 查看配置信息
  + 解决npm被墙使用cnpm
   
### 3.3 package.json 包说明文件，来看项目调用了那些包
  + 怎么添加到项目里：
    + 手动：npm install art-template --save  可以追加第三方包的依赖信息
    + 自动：初次创建项目npm init 则会有package.json 主要是项目信息
    + 删除node_module可以通过npm install就可以把依赖项加回来
### 3.4 Express
+ 第三方Web开发框架

+ 高度封装http模块

​    


### 补充知识点
+ 301 永久重定向
+ 302 临时重定向


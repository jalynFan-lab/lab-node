# 5.1 promise
+ promise是个容器，容器中存放了一个异步任务，异步任务有三个状态
+ pending --resolved  成功
          -- rejected 失败
+ promise是一个构造函数
+ 使用方法：
    + 1.创造容器
    + 2.实例化
+ 例子：01，02
# 5.2 json-server http-server

    (base) hankyozei@fanjuruideMacBook-Pro 05-02 % json-server --watch data.json 
    // 打开某json文件
    \{^_^}/ hi!
    
    Loading data.json
    Done
    
    Resources
    http://localhost:3000/users
    http://localhost:3000/jobs
    
    Home
    http://localhost:3000
    
    Type s + enter at any time to create a snapshot of the database
    Watching...
    
    GET /db 200 1.758 ms - 466
    GET /__rules 404 6.234 ms - 2
    GET /users 200 5.029 ms - 154
    GET /jobs 200 3.551 ms - 217
    ^C
    (base) hankyozei@fanjuruideMacBook-Pro 05-02 %  hs -c-l -o  
    zsh: command not found: hs 
    //npm install --global http-server 安装http-server
    (base) hankyozei@fanjuruideMacBook-Pro 05-02 %  hs -c-l -o  
    Starting up http-server, serving ./
    Available on:
    http://127.0.0.1:8080
    http://192.168.3.6:8080
    Hit CTRL-C to stop the server
    open: http://127.0.0.1:8080
    [2020-09-13T12:37:43.822Z]  "GET /" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"
    (node:14368) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
    (Use `node --trace-deprecation ...` to show where the warning was created)
    [2020-09-13T12:37:44.711Z]  "GET /favicon.ico" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36"
    [2020-09-13T12:37:44.714Z]  "GET /favicon.ico" Error (404): "Not found"
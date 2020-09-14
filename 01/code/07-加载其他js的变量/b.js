var foo="hello"

exports.foo="hello"

exports.add=function(x,y){
return x+y
}

//如果需要对于一个模块就只得到一个方法或者成员，就是不是挂载而是直接导出的时候需要使用module.exports=对象

module.exports="hello"
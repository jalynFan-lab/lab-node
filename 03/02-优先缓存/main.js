require('./a')
require('./b')

/*执行结果是
a.js
b.js
加载a中的require（‘./b’）之后main中的require（‘./b’）就不再加载
*/
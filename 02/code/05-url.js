var url=require('url')

var urlObj=url.parse('https://www.google.com/search?q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8',true)
console.log(urlObj)
var query=urlObj.query
console.log(query.q)
//解决[Object: null prototype]
var jsonObj=JSON.stringify(query)
var obj=JSON.parse(jsonObj)
console.log(obj.q)
//没有true的情况下
/*Url {
    protocol: 'htt
    ps:',
    slashes: true,
    auth: null,
    host: 'www.google.com',
    port: null,
    hostname: 'www.google.com',
    hash: null,
    search: '?q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8',
    query: 'q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8',
    pathname: '/search',
    path: '/search?q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8',
    href: 'https://www.google.com/search?q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8'
}*/
//有true的情况下将查询字符串转为对象通过query来访问
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com',
  port: null,
  hostname: 'www.google.com',
  hash: null,
  search: '?q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8',
  query: [Object: null prototype] {
    q: 'biaodan',
    oq: 'biaodan ',
    aqs: 'chrome..69i57j0l7.2852j0j7',
    sourceid: 'chrome',
    ie: 'UTF-8'
  },
  pathname: '/search',
  path: '/search?q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8',
  href: 'https://www.google.com/search?q=biaodan&oq=biaodan+&aqs=chrome..69i57j0l7.2852j0j7&sourceid=chrome&ie=UTF-8'
}
*/
function get(url,callback){
    var oRep = new XMLHttpRequest()
    oRep.onload = function(){
       callback(oRep.responseText) 
    }
    oRep.open('get',url,true)
    oRep.send()
}
get('data.json',function(data){
    console.log(data)
})
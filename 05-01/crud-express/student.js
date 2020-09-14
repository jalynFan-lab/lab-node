var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/student')
var Schema = mongoose.Schema

var commentSchema = new Schema({
name:{
    type:String,
    required:true
},
age:{
    type:Number
},
gender:{
    type:String,
    required:true
},
hobbies:{
    type:String,
    required:true
}
})
module.exports = mongoose.model('Student',commentSchema)
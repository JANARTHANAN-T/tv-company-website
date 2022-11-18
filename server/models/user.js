const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:String,
    mobile:String,
    address:String,
    password:String,
    isAdmin:{
      type:Boolean,
      default:false
    },
    bought:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
      }],
    joinedOn: {
        type: Date,
        default: Date.now,
    },  
})

module.exports = mongoose.model("User",userSchema)
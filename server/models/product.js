const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    image:String,
    name:String,
    description:String,
    features:[String],
    size:String,
    quantity:{
        type:Number,
        default:1
    },
    price:String,
    postedOn: {
        type: Date,
        default: Date.now,
    },  
})

module.exports = mongoose.model("Product",productSchema)
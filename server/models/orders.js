const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    orderedOn: {
        type: Date,
        default: Date.now,
    },  
})

module.exports = mongoose.model("Orders",ordersSchema)
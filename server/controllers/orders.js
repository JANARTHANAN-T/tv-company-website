const Orders = require('../models/orders')
const { json } = require('express')

module.exports.getAllOrders = async(req,res)=>{
    try{
        const orders = await Orders.find({}).sort({orderedOn:-1}).populate('product').populate('user')
        res.status(200).json(orders)
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports.editOrders = async(req,res)=>{
    try{
        const {id} = req.params
        const order = await Orders.findOneAndUpdate({_id:id},{isDelivered:true})
        await order.save()
        res.status(200).json({message:`Success - Order delivered`})

    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports.deleteOrders = async(req,res)=>{
    try{
        const {id} = req.params
        await Orders.deleteOne({_id:id})
        res.status(200).json({message:`Success - Order deleted`})

    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}
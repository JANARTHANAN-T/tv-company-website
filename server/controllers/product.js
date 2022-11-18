const Product = require('../models/product')
const User = require('../models/user')
const Orders = require('../models/orders')



// client actions

module.exports.getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find({}).sort({postedOn:-1})
        res.status(200).json(products)

    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports.getProduct = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports.buyProduct = async(req,res)=>{
    try{
        const {id,user_id,qty} = req.params
        const order = new Orders({product:id,quantity:qty,user:user_id})
        const user = await User.findById(user_id)
        user.bought.push(id)
        await user.save()
        await order.save()
        res.status(200).json({message:`Success - product has been bought by ${user.name} `})
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

// Admin actions

module.exports.addProduct = async(req,res)=>{
    try{
        const product = new Product({...req.body})

        await product.save()
        console.log('hai');
        const products = await Product.find({}).sort({postedOn:-1})
        res.status(200).json(products)
    }catch(e){
        console.log(e.message);
        res.status(500).json({message:"Internal Server Error"})
        
    }
}

module.exports.editProduct = async(req,res)=>{
    try{    
        const {id} = req.params
        const {image,name,description,features,size,quantity,price} = req.body
        const product = await Product.findOneAndUpdate({_id:id},{image,name,description,features,size,quantity,price})
        await product.save()
        res.status(200).json({message:`Success - ${name} is updated `})
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports.deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params
        await Product.deleteOne({_id:id})
        res.status(200).json({message:`Success - Product deleted`})
    }catch{
        res.status(500).json({message:"Internal Server Error"})
    }
}


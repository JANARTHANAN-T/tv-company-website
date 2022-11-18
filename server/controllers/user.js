const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User= require('../models/user')
const { json } = require('express')

module.exports.signUp = async(req,res)=>{
    const {name,email,mobile,address,password} = req.body
    try {
        const existinguser=await User.findOne({email})
        if(existinguser){
            return res.status(400).json({message:'User already found..'})
        }
        const hashPassword = await bcrypt.hash(password,12);
        const newUser=new User({name,email,mobile,address,password:hashPassword})
        await newUser.save();
        const token = jwt.sign({email:newUser.email},'token',{expiresIn:'1h'})
        res.status(200).json({result:newUser,token})
    } catch (err) {
        res.status(500).json({message:'Something went worng... Please try again'})
    }
}

module.exports.login = async(req,res) =>{
    const {email,password} = req.body;
    try{
        const existinguser = await User.findOne({email}).populate('bought')
        if(!existinguser){
            return res.status(404).json({message:"User not found..."})
        }
        const isPasswordCrt = await bcrypt.compare(password,existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({email:existinguser.email},'token',{expiresIn:'48h'})
        res.status(200).json({result:existinguser,token})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
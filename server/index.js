if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
  
const express = require('express')
const app = express()
const mongoose=require('mongoose')
const cors=require("cors")
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const ordersRoutes = require('./routes/orders')

const DATABASE_URL=process.env.DATABASE_URL
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Mongo Atlas Connected");
}).catch(err=>{
    console.log("Database not connected")
})


app.use(cors())
app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }))


app.use('/user',userRoutes)
app.use('/product',productRoutes)
app.use('/orders',ordersRoutes)
app.get('/',(req,res)=>res.send('TV Manufacturing company'))

const port = process.env.PORT || 5000
app.listen(port,()=> console.log(`Server running in the port ${port}`))
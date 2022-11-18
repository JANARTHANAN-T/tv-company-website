const express = require('express')
const router = express.Router()
const {getAllProducts,getProduct,buyProduct,addProduct,editProduct,deleteProduct}=require('../controllers/product')

router.get('/all',getAllProducts)
router.get('/:id',getProduct)
router.get('/:id/:user_id/:qty/buy',buyProduct)
router.post('/add',addProduct)
router.post('/edit/:id',editProduct)
router.get('/delete/:id',deleteProduct)

module.exports=router
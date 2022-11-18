const express = require('express')
const router = express.Router()
const {getAllOrders, editOrders, deleteOrders}=require('../controllers/orders')

router.get('/all',getAllOrders)
router.get('/:id/edit',editOrders)
router.get('/:id/delete',deleteOrders)


module.exports=router
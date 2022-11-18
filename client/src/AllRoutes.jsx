import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './screens/Home/Home'
import AllProducts from './screens/AllProducts/AllProducts'
import Product from './screens/Product/Product'
import About from './screens/About/About'
import Contact from './screens/Contact/Contact'
import Auth from './screens/Auth/Auth'
import AddProduct from './screens/AddProduct/AddProduct'
import Orders from './screens/Orders/Orders'
import PreviousOrders from './screens/PreviousOrders/PreviousOrders'


const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<AllProducts />}/>
          <Route path='/product/:id' element={<Product />}/>
          <Route path='/about-us' element={<About />}/>
          <Route path='/contact-us' element={<Contact />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/add-product' element={<AddProduct />}/>
          <Route path='/previous-orders' element={<PreviousOrders />}/>
          <Route path='/orders' element={<Orders />}/>
      </Routes>
    )
  }
  
  export default AllRoutes
import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import './AllProducts.css'
const products = JSON.parse(localStorage.getItem("aqua-products"));

function Products() {
  const [image,setImage]=useState('https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY')
  return (

        <div>
          <div className='Header fs-1 text-center mt-4'>Our Products</div>
          <div className='container mb-5'>
              <div className='row '>
              {products.map((e,i)=>{
                const link = `/product/${e._id}`
                return(
              <div className='col-md-3 d-flex align-items-center justify-content-center p-5'>
              <Link to={link} className='text-dark' style={{textDecoration:'none'} }>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "15rem"}}>
                <img className="image" src={e.image} alt="Card image cap"/>
                <div class="card-body">
                <p className='fs-5 fw-bold'>{e.name}</p>
                <p class="card-text">{e.description.slice(0,80)}...</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </Link>
                </div>

                )
              })}             
            </div>
         </div>
        </div>
  )
}

export default Products
import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Product() {
    const navigate = useNavigate()
    let { id } = useParams();
    const products = JSON.parse(localStorage.getItem("aqua-products"));
    const user = JSON.parse(localStorage.getItem("aqua-user"));
     const product=products.filter(p=> p._id==id )
     console.log(product);
    const [name,setName]=useState(product[0].name)
    const [image,setImage]=useState(product[0].image)
    const [description,setDescription]=useState(product[0].description)
    const [feature,setFeature]=useState(product[0].features)
    const [size, setSize]=useState(product[0].size)
    const [quantity,setQuantity]=useState(1)
    const [price,setPrice]=useState(parseInt(product[0].price))

    const handleOrder = async(e) =>{
        e.preventDefault()
        await axios({
          method: 'get',
          url: `http://localhost:5000/product/${id}/${user._id}/${quantity}/buy`,
        }).then(
          (res)=>{
            alert('Our Service team will call you soon !')
            navigate("/")
        }
        ).catch((err)=>{
          console.log(err)
          alert("Invalid Credential")
        })
    }

  return (
    <div className='container my-5'>
        <div className="row d-flex  align-items-center">
            <div className="col-md-6 text-center">
                <img src={image} className='img-fluid' alt="" /><br />
                <button className='btn btn-success mt-5 px-5 py-3 fw-bold' onClick={handleOrder}>ORDER NOW</button>
            </div>
            <div className="col-md-6 p-4">
                <h3 className='text-secondary mb-3'>{name}</h3>
                <div className='fs-6'>{description}</div>
                <div className='fs-5 fw-bold my-3'>Features:</div>
                <ul>
                {feature.map((element,index)=>(
                    <li key={index}>{element}</li>
                ))}
                </ul>
                <div className='fs-5'>Screen Size: {size}"</div>
                <div className='d-flex my-3'>
                    <div className='fs-5'>Quantity: </div>
                    <div className='d-flex align-items-center mx-3'>
                        <button className='btn btn-danger p-1' onClick={()=>{quantity!=1?setQuantity(quantity-1):setQuantity(quantity)}}>-</button>
                        <div className='px-3 '>{quantity}</div>
                        <button className='btn btn-success p-1' onClick={()=>setQuantity(quantity+1)}>+</button>
                    </div>
                </div>  
                <div className='fs-4 fw-bolder'>₹ {price * quantity}</div>
            </div>
        </div>
    </div>
  )
}

export default Product
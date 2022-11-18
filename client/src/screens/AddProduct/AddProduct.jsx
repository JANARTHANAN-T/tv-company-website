import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate()

  const [name, setName]= useState('')
  const [description, setDescription]= useState('')
  const [feature, setFeatures]= useState('')
  const [size, setSize]= useState('')
  const [price, setPrice]= useState('')
  const [image,setImage]= useState('')

  const handleAddProduct = async(e) => {
    e.preventDefault()
    const features = feature.split(",")
    console.log(features)
    await axios({
      method: 'post',
      url: 'http://localhost:5000/product/add',
      data: {name,description,features,size,price,image}
    }).then(
      (res)=>{
        localStorage.setItem("aqua-products", JSON.stringify(res.data));
        navigate("/products")
    }
    ).catch((err)=>{
      console.log(err)
      alert("Please try again!!!")
    })
  }
  return (
    <div>
        <div className="row">
            <div className="col-md-6  ">
              <img src="https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className='side-img'   alt="" />
            </div>
            <div className="col-md-6 p-4 pe-5">
   
              <div className="card shadow">
                <div className="card-body">
                <h3 className='text-center '>Add Product </h3>
                <div className=" container">
                    <label htmlFor="" className='form-label mt-3'>Product Name</label>
                    <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}   />
                    <label htmlFor="" className='form-label mt-3'>Product Image</label>
                    <input type="text" className='form-control' value={image} onChange={(e)=>setImage(e.target.value)}   />
                    <label htmlFor="" className='form-label mt-3'>Decription</label>
                    <textarea name="" id="" cols="10" rows="5" className='form-control' onChange={(e)=>setDescription(e.target.value)}>{description}</textarea>
                    <label htmlFor="" className='form-label mt-3'>Features</label>
                    <input type="text" className='form-control' value={feature} onChange={(e)=>setFeatures(e.target.value)}   />
                    <p>input the features, each separated by comma(,) eg,. HD, OLED, etc,. </p>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="" className='form-label mt-3'>Size</label>
                        <input type="text" className='form-control' value={size} onChange={(e)=>setSize(e.target.value)}  />
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="" className='form-label mt-3'>Price</label>
                          <input type="text" className='form-control' value={price} onChange={(e)=>setPrice(e.target.value)}  />
                      </div>
                    </div>
                    <div className="text-center mt-4">
                    <button className='btn btn-primary mt-3' onClick={handleAddProduct}>ADD</button>
                    </div>
                </div>  
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct
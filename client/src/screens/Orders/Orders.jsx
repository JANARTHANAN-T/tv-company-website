import React, {useState,useEffect} from 'react'
import axios from 'axios'

function Orders() {

    const [orders,setOrders]=useState([])
    useEffect(()=>{
        getOrders()
    }, [])

    const getOrders = async() =>{
        await axios({
          method: 'get',
          url: `http://localhost:5000/orders/all`,
        }).then(
          (res)=>{
            setOrders(res.data)
            localStorage.setItem("aqua-orders", JSON.stringify(res.data));
        }
        ).catch((err)=>{
          console.log(err)
          alert("Invalid Credential")
        })
    }

    console.log(orders)

  return (
    <div className='container my-5'>
    {orders.map((e,i)=>{
        return(
        <div className="card shadow my-4">
        <div className="card-body">
            <div className="row">
                <div className="col-md-6 p-5">
                    {/* <h3>Product</h3> */}
                    <h5>{e.product.name}</h5>
                    <div >{e.product.description}</div>
                    <div className='fs-5'>Price: {e.product.price}</div>
                    <div className='fs-5 my-2'>Quantity: {e.quantity}</div>
                </div>
                <div className="col-md-6 p-5">
                 <h3 className='mb-3'>Ordered by</h3>
                    <h5>{e.user.name}</h5>
                    <div >{e.user.email}</div>
                    <div className='fs-5'>{e.user.mobile}</div>
                    <div className='fs-5 my-2 fw-bold'>Total Amount: {e.quantity * parseInt(e.product.price)}</div>
                    <div className='mt-5'>{e.orderedOn}</div>
                </div>
            </div>
        </div>
        </div>

        )
    })
    }
    </div>
  )
}

export default Orders
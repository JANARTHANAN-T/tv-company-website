import React,{useState} from 'react'
import './Auth.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const [login,setLogin]=useState(true)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [address,setAddress]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

  const handleLogin = async(e) =>{
    e.preventDefault()
    await axios({
      method: 'post',
      url: 'http://localhost:5000/user/login',
      data: {email,password}
    }).then(
      (res)=>{
        localStorage.setItem("aqua-user", JSON.stringify(res.data.result));
        navigate("/")
    }
    ).catch((err)=>{
      console.log(err)
      alert("Invalid Credential")
    })
  }


  const handleSignup = async(e) =>{
    e.preventDefault()
    if(password===confirmPassword){
      await axios({
        method: 'post',
        url: 'http://localhost:5000/user/signup',
        data: {name,email,mobile,address,password}
      }).then(
        (res)=>{
          localStorage.setItem("aqua-user", JSON.stringify(res.data.result));
          navigate("/")
      }
      ).catch((err)=>{
        console.log(err)
        alert("Invalid Credential")
      })
    }else{
      alert('Invalid Creditials: Check Password')
    }
  }

  return (
    <div>
        <div className="row">
            <div className="col-md-6  ">
              <img src="https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className='side-img'   alt="" />
            </div>
            <div className="col-md-6 p-4 pe-5">
            {login?
              <div className="card shadow m-5">
                <div className="card-body">
                <h3 className='text-center '>Log In </h3>
                <div className=" container p-5">

                    
                        <label htmlFor="" className='form-label mt-4'>Email</label>
                        <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />
           
                  
            
                          <label htmlFor="" className='form-label mt-4'>Password</label>
                          <input type="password" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} />
              
                    <div className="text-center mt-4">
                    <button className='btn btn-primary mt-3' onClick={handleLogin}>Log In</button>
                    </div>
                    <p className='text-center mt-5'>Don't have an account? <span className='text-primary fw-bold pointer' onClick={()=>setLogin(false)}>Sign Up</span></p>
                </div>  
                </div>
              </div>:
              <div className="card shadow">
                <div className="card-body">
                <h3 className='text-center '>Sign Up </h3>
                <div className=" container">
                    <label htmlFor="" className='form-label mt-3'>Name</label>
                    <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="" className='form-label mt-3'>Email</label>
                        <input type="text" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="" className='form-label mt-3'>Mobile Number</label>
                        <input type="text" className='form-control' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                      </div>
                    </div>
                    <label htmlFor="" className='form-label mt-3'>Address</label>
                    <textarea name="" id="" cols="10" rows="5" className='form-control' onChange={(e)=>setAddress(e.target.value)}>{address}</textarea>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="" className='form-label mt-3'>Set Password</label>
                        <input type="password" className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} />
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="" className='form-label mt-3'>Confirm Password</label>
                          <input type="password" className='form-control' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className="text-center mt-4">
                    <button className='btn btn-primary mt-3' onClick={handleSignup}>Sign Up</button>
                    </div>
                    <p className='text-center mt-3'>Already have an account? <span className='text-primary fw-bold pointer' onClick={()=>setLogin(true)}>Login</span></p>
                </div>  
                </div>
              </div>

            }
            </div>
        </div>
    </div>
  )
}

export default Auth
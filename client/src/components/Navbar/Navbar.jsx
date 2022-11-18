import React from 'react'
import './Navbar.css'
import { NavLink, Link} from 'react-router-dom'
import logo from '../../assert/image/smart-tv.png'
import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("aqua-user"));
  const handleLogOut = async(e) => {
    e.preventDefault()
    await localStorage.removeItem("aqua-user");
    navigate("/auth");
  }

  return (
    <nav className="navbar navbar-expand-md shadow navigation py-2">
    <div className="container-fluid">
      <img src={logo} alt="" height="40px" /> <span className='fs-4 mx-3 logo-font'>Aqua TV</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <NavLink className="nav-link text-center" to="/">Home</NavLink>
          <NavLink className="nav-link text-center" to="/products">Product</NavLink>
          {!user?.isAdmin &&
          <NavLink className="nav-link text-center" to="/about-us">About</NavLink>
          }
          {!user?.isAdmin &&
          <NavLink className="nav-link text-center" to="/contact-us">Contact</NavLink>
          }
          {!user?.isAdmin &&
          <NavLink className="nav-link text-center" to="/previous-orders">Previous Orders</NavLink>
          }
          {user?.isAdmin &&
          <NavLink className="nav-link text-center" to="/orders">Orders</NavLink>
          }
          {user?.isAdmin &&
          <NavLink className="nav-link text-center" to="/add-product">Add Product</NavLink>
          }

        </div>
        <div className='text-center ms-auto '>
    {user ?
      <button className="btn fw-bold" onClick={handleLogOut}>Log out</button>:
      <Link className="btn fw-bold" to="/auth">Login/Register</Link> 
    }
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
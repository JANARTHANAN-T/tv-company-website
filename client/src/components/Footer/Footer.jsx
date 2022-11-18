import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
        <div className='footer'>
          <div className='footer-wrapper p-5'>
            <div className='row'>
                <div className='col-md-3'>
                  <div className='footer-title mb-4'>Products</div>
                  <p className='fs-6'>TV whole sale</p>
                  <p>Display</p>
                  <p>PCB Circuit Board</p>
                  <p>Speackers</p>
                </div>
                <div className='col-md-3'>
              <div className='footer-title mb-4'>Services</div>
              <p>Strenth Witness</p>
              <p>Download center</p>
               </div>
               
               <div className='col-md-3'>
                <div className='footer-title'>Partners & Distributors</div>
               </div>
               <div className='col-md-3'>
                <div className='footer-title mb-4'>Contact</div>
                <p>Email: aqua-tv@gmail.com</p>
                <p>Head quarters Loaction:</p>
                <p> No. 32 Xixiu Road, Xiuquan Street, Huadu District, Guangzhou </p>
               </div>
              </div>
            </div>
            <hr className='mx-3' />
            <div className='d-flex justify-content-between mx-3 pb-4'>
            <div>Copyright © 2022</div>
            <div>All Right Reserved</div>

            </div>
            </div>
    </div>
  )
}

export default Footer
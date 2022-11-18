import React, {useState} from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
function Home() {
  const [image,setImage]=useState('https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY')

  return (
    <div>
        <div className='carousel '>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" data-interval="0.5">
    <div class="carousel-item active" data-interval="1">
      <img src="https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" height="500px" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="1">
      <img src="https://raw.githubusercontent.com/G-Kiruthika/tv-website/master/src/asserts/images/carousel2.avif" class="d-block w-100" height="500px" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="1">
      <img src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="d-block w-100" height="500px" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className='text-center fs-1 m-5 Header'>
          Aqua TVs
        </div>
        <div className='cards'>
          <div className='title'>
            <h3 className='my-4 text-center'>OUR HOT PRODUCTS</h3>
            <p className='p1 fs-5'>The followings are domestic appliances from Aqua, including aiwa smart TV, LCD Monitor, Speakers and so on. They all enjoy high quality and always are improved according 
              to the customers’ needs.</p>
             <p className='fs-5'> Over these years, Aiwa has become an all-around household appliance provider from a professional TV manufacturer.</p>
          </div>
          <div className=''>
              <div className='row my-3'>
              <div className='col-md-4 d-flex align-items-center justify-content-center p-5'>
              <Link to="/product" className='text-dark' style={{textDecoration:'none'} }>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "15rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
              <Link to="/product" className='text-dark' style={{textDecoration:'none'} }>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "15rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "15rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "15rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "15rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
                <div className='products-content'>
                <div className="card image-wrapper" style={{width: "15rem"}}>
                <img className="image" src={image} alt="Card image cap"/>
                <div class="card-body"> <br />
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='view-more-wrapper'>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 <hr className='hr mx-4 m-1' style={{width:"220px"}}/>
                 </div>
                 <button className='view-more-btn my-2'>View More</button>
                </div>
                </div>
                </div>
            </div>
         </div>
        </div>
        <div className='contact-wrapper'>
          <div className='form-wrapper'>
            <div className='form-content '>
              <div className='form-title my-3 px-3'>
                <h3 className='text-center Header'>Contact Us</h3>
              </div>
              <div className='form-label'>
                <form action="">
                <div className='row'>
                  <div className='col-md-6'>
                  <input type="text" className="form-control m-3" placeholder='Name'/>
                  <input type="text" className="form-control m-3" placeholder="Country" />
                  </div>
                  <div className='col-md-6'>
                  <input type="text" className="form-control m-3" placeholder='Phone Number'/>
                  <input type="text" className="form-control m-3" placeholder="Email" />
                  </div>
                  </div>
                  <div className='comment'>
                    <textarea name="comment" id="comment" className='form-control m-3' placeholder='Please indicate which products/services you are interested in and we will contact you soon'></textarea>
                  </div>
                  <div className='button px-3'>
                    <input type="button" value="Submit" id='home-btn' className='home-btn'/>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
  
    </div>
    </div>
  )
}

export default Home;
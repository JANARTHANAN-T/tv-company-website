import React from 'react'

function PreviousOrders() {
    const user = JSON.parse(localStorage.getItem("aqua-user"));
  return (
    <div>
    {user.bought.map((e,i)=>{
        return(

        <div class="card mb-3 shadow m-5">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={e.image} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{e.name}</h5>
        <p class="card-text">{e.description.slice(0,100)}...</p>
        <p class="card-text fs-3 fw-bold"><small class="text-muted">{e.price}</small></p>
      </div>
    </div>
  </div>
</div>
        )
    })}
    </div>
  )
}

export default PreviousOrders
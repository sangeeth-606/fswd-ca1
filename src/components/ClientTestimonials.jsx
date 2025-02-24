/* eslint-disable react/prop-types */
// import React from 'react'

function ClientTestimonials({name ,rev}) {
  return (
    <div  style={{gap:"10px"}} >
    <div style={{border:"2px solid black",gap:"10px"}} >
        <h1>{name}</h1>
        <h2>{rev}</h2>
    </div>
    </div>
  )
}

export default ClientTestimonials
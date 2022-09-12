import React from 'react'
import {useNavigate} from 'react-router-dom'

function Ordersummery() {
    const navgate = useNavigate()
  return (
    <>
        <div>Order Confirmed!</div>
        <button onClick={()=>navgate('/')}>Go tO home</button>
    </>
    

    
  )
}

export default Ordersummery
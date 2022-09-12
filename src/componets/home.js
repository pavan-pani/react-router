import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navgate = useNavigate()
  return (
    <>
        <div>Home Page</div>
        <button onClick={()=>navgate('order-summary')}>Place order</button>
    </>
   
  )
}

export default Home
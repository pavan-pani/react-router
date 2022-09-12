import React from 'react'
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <nav className='pri-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Product</NavLink>
    </nav>
  )
}

export default navbar
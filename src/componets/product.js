import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function product() {
  return (
    <>
    <div>
        <input type='search' placeholder='Search from Item'></input>
    </div>
    <nav>
        <Link to='featured'>Featured </Link>
        <Link to='new'>new </Link>
    </nav>
    <Outlet/>
    </>
    
  )
}

export default product
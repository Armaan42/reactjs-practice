import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-5 bg-[#1e1e1e]'>
        <h1 className='text-xl font-bold text-white'>Logo</h1>
        <div className='flex items-center gap-10 text-white' >
            <Link to='/' >Home</Link>
            <Link to='/Contact' >Contact</Link>
            <Link to='/About' >About</Link>
            <Link to='/Product' >Product</Link>
            <Link to='/Courses' >Courses</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
 
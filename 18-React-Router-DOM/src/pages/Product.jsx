import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 p-10' >
            <Link className='text-lg font-medium' to='/Product/men' >Men</Link>
            <Link className='text-lg font-medium' to='/Product/women' >Women</Link>
        </div> 
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medium underline underline-offset-8" >Product</h1>
    </div>
  )
}

export default Product

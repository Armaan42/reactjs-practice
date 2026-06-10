import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()

  return (
    <div>
        <button onClick={()=>{
            navigate('/')
        }} className='bg-green-300 px-5 py-2 m-5 rounded cursor-pointer active:scale-95' >Return to Home Page</button>

        <button onClick={()=>{
            navigate(-1)
        }} className='bg-green-300 px-5 py-2 m-5 rounded cursor-pointer active:scale-95' >Back</button>

      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medium underline underline-offset-8" >About</h1>
    </div>
  )
}

export default About

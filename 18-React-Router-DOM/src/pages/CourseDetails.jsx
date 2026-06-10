import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const params = useParams()
    console.log(params.id);
    

  return (
    <div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medium underline underline-offset-20 capitalize" >{params.id} Course Details</h1>
    </div>
  )
}

export default CourseDetails

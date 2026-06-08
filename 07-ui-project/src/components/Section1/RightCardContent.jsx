import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>
      <p className='text-xl leading-normal text-white mb-10'>{props.intro}</p>
      <div className='flex justify-between'>
        <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full'>{props.tag}</button>
        <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><ArrowRight /></button>
      </div>
    </div>
  )
}

export default RightCardContent

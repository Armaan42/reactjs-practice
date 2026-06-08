import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 bg-red-400 rounded-4xl overflow-hidden relative' >
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'> 
            <h2 className='bg-white rounded-full font-semibold h-12 w-12 flex justify-center text-gray-800 items-center text-2xl' >{props.index}</h2>
            <RightCardContent id={props.index} intro={props.intro} tag={props.tag} />
        </div>
    </div>
  )
}

export default RightCard

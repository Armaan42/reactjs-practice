import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto w-2/3 p-4 flex flex-nowrap gap-5' >
        {props.users.map(function(elem, index) {
            return <RightCard key={index} index={index + 1} img={elem.img} intro={elem.intro} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent

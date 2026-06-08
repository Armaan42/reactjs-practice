import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-12 flex gap-10 px-18 h-[90vh] bg-white' >
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content

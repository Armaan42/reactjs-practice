import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
  }

  return (
    <div className='h-screen bg-gray-950 text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex justify-between items-start p-10 gap-5 flex-col'>
          <input className='w-full font-medium px-5 py-2 border-3 rounded outline-none ' type="text" placeholder='Enter Notes heading' />
          <textarea className='w-full px-5 py-2 border-2 rounded h-40 font-medium outline-none' type="text" placeholder='Write details'/>
          <button className='bg-white font-medium text-black px-5 py-2 rounded outline-none' >Add Notes</button>
      </form>
    </div>
  )
}

export default App 

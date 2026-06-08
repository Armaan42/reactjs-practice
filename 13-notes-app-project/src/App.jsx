import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, settitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const deleteNote = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx, 1)

    setTask(copyTask)

  }

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({
      title, details
    })

    setTask(copyTask)

    console.log(copyTask)

    // console.log(title);
    // console.log(details);

    settitle('')
    setDetails('')
  }

  return (
    <div className='h-screen lg:flex bg-gray-950 text-white'>

      <form  onSubmit={(e) => {
        submitHandler(e)
      }} className='flex items-start gap-5 flex-col p-10 lg:w-3/5'>
        <h1 className='text-2xl font-bold'>Add Notes</h1>

          <input className='w-full font-medium px-5 py-2 border-3 rounded outline-none ' type="text" placeholder='Enter Notes heading' value={title} onChange={(e) => {
            settitle(e.target.value)
          }}/>

          <textarea className='w-full px-5 py-2 border-2 rounded h-40 font-medium outline-none' type="text" placeholder='Write details' value={details} onChange={(e) => {
            setDetails(e.target.value)
          }} />

          <button className='bg-white active:scale-98 w-full font-medium text-black px-5 py-2 rounded outline-none' >Add Notes</button>
      </form>

      <div className='p-5 bg-orange-700 lg:border-l-2 lg:w-2/5 gap-10'>
        <h1 className='text-2xl font-bold'>Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]' >
            {/* <div className="h-52 w-45 rounded bg-white"></div> */}

            {task.map(function(elem, idx){
              return <div key={idx} className="h-52 w-45 relative text-black p-4 rounded bg-white">
                <h2 onClick={() => {
                  deleteNote(idx)
                }} className=' cursor-pointer active:scale-95 absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs text-white' ><X /></h2>
                <h3 className='leading-tight text-xl font-bold' >{elem.title}</h3>
                <p className='mt-2 leading-tight text-gray-600'> {elem.details}</p>
              </div>
            })}

          </div>
      </div>

    </div>
  )
}

export default App 

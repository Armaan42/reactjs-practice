import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`)
    setUserData(response.data)
  }

  useEffect(function() {
    getData();
  },[index])

  let printUserData = <h2 className='text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >Loading</h2>;

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx) {
      return <div key={idx} >

        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 rounded-xl overflow-hidden' >
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='text-xm font-bold mt-3' >{elem.author}</h2>
        </a>
        
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto bg-[#1e1e1e] p-5 text-white w-screen ' >

      {/* <button className='px-5 py-2 active:scale-95 bg-green-600 rounded' 
        onClick={()=>{
          getData()
        }}
        >Get Data</button> */}

        {/* <h1 className='text-5xl' >{index}</h1> */}
        <div className='flex flex-wrap gap-4 py-5' >
          {printUserData}
        </div>

        <div className='flex justify-center items-center p-5 gap-5' >
          
          {/* prev button  */}
          <button className='bg-amber-300 active:scale-95 cursor-pointer font-medium text-black px-4 py-2 rounded-xl' style={{opacity: index == 1 ? 0.5 : 1}} onClick={()=>{

            if(index > 1){
              setIndex(index-1)
              setusersData([])
            }
            
          }} >Prev</button>
          
          <h4>Page {index}</h4>

          {/* next button  */}
           <button className='bg-amber-300 active:scale-95 cursor-pointer font-medium text-black px-4 py-2 rounded-xl' onClick={()=>{
            setIndex(index+1)
            setusersData([])        
           }} >Next</button>

        </div>

    </div>
  )
}

export default App

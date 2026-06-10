import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { ArrowLeft } from 'lucide-react';  

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=24')
    setUserData(response.data)
  }

  useEffect(function() {
    getData();
  },[])

  let printUserData = <h2>No Data Available</h2>;

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
    <div className='h-screen overflow-auto bg-[#4d4d4d] p-5 text-white w-screen ' >

      {/* <button className='px-5 py-2 active:scale-95 bg-green-600 rounded' 
        onClick={()=>{
          getData()
        }}
        >Get Data</button> */}

        <div className='flex flex-wrap gap-4 py-5' >
          {printUserData}
        </div>

        <div className='flex justify-center item-center p-4 gap-5' >
          <button className='bg-amber-300 active:scale-95 cursor-pointer font-medium text-black px-4 py-2 rounded-xl' >Prev</button>
          <button className='bg-amber-300 active:scale-95 cursor-pointer font-medium text-black px-4 py-2 rounded-xl' >Next</button>
        </div>

    </div>
  )
}

export default App

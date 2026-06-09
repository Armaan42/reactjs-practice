import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function() {
    console.log('useffect is running');
  },[num])
  
  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2} </h1>
      <button onMouseEnter={() => {
        setNum(num+1)
      }} onMouseLeave={() => {
        setNum2(num2+1)
      }} >Click</button>
    </div>
  )
}

export default App

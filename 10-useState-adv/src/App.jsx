import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(20);
        console.log(num);
      }} >click</button>
    </div>
  )
}

export default App
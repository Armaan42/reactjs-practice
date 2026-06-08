import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState([1,2,3,4,5])

  const btnClicked = () => {
    const newNum = [...num]
    newNum.push(num.length+1)
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
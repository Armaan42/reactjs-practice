import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'aaa', age:12})

  const btnClick = () => {
    const newNum = {...num}
    newNum.user = 'bbb'
    newNum.age = 15
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClick}>click</button>
    </div>
  )
}

export default App
import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'aaa', age:12})

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={() => {

        const newNum = {...num}
        newNum.user = 'bbb'
        newNum.age = 15
        setNum(newNum)

      }} >click</button>
    </div>
  )
}

export default App
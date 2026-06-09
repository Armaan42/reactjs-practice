import React from 'react'
import axios from 'axios'

const App = () => {

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  // USING FETCH METHOD

  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  //   console.log(response);

  //   const data = await response.json()
  //   console.log(data)
  // }


  // USING AXIOS METHOD

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    
  }


  return (
    <div>
      <button onClick={getData} >Get Data</button>
    </div>
  )
}

export default App

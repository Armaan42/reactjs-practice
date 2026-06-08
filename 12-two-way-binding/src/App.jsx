import React, {useState} from 'react'

const App = () => {

  const [Title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted by',Title);

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>

        <input type="text" 
        value={Title} 
        placeholder='Enter your name' 
        onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        
        <button>Submit</button>

      </form>
    </div>
  )
}

export default App
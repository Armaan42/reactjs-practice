import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">

      <Card user="Aman" age={18} img="https://images.unsplash.com/photo-1780399382419-b329036e0662?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <Card user="John" age={21} img="https://images.unsplash.com/photo-1777670867722-b3aea4bba1f3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

    </div>
  )
}

export default App

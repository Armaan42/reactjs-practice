import React from 'react'

const App = () => {

  // localStorage.setItem('user','armaan')

  // const user = localStorage.getItem('user')
  // console.log(user); 

  const users = {
    username: 'armaan',
    age: 21,
    gender: 'male'
  }  

  // localStorage.setItem('user', JSON.stringify(users));

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  

  return (
    <div>
      App
    </div>
  )
}

export default App

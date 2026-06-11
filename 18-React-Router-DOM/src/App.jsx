import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import NotFound from './pages/NotFound'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 

        <Route path='/Product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>   

        <Route path='/Courses' element={<Courses />} />
        <Route path='/Courses/:id' element={<CourseDetails />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  )
}

export default App

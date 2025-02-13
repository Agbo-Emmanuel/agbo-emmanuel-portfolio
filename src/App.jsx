import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
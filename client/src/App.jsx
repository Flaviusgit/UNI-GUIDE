import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/home" element = {<Home/>} />
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/sign-up" element = {<SignUp />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/sign-in" element = {<SignIn />}/>
      <Route path = "/dashboard" element = {<Dashboard/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
  )
}

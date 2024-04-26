import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'
import Search from './pages/Search'
import Quiz from './pages/Quiz'
import CreateQuestion from './pages/CreateQuestion'
import EditQuestion from './pages/EditQuestion'
import Contact from './pages/Contact'



export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/sign-up" element = {<SignUp />}/>
      <Route path = "/search" element = {<Search />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/quiz" element = {<Quiz/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route element = {<PrivateRoute/>}>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
      </Route>
      <Route path = "/sign-in" element = {<SignIn />}/>
      <Route element = {<OnlyAdminPrivateRoute/>}>
        <Route path = "/create-post" element = {<CreatePost/>}/>
        <Route path='/update-post/:postId' element={<UpdatePost />} />
        <Route path = '/create-question' element = {<CreateQuestion/>}/>
        <Route path = '/edit-question/:questionId' element = {<EditQuestion/>}/>
      </Route>
      <Route path = "/post/:postSlug" element = {<PostPage />}/>  
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

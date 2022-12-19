
import React from 'react'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import AddBlog from './Components/AddBlog/AddBlog';
import Admin from './Components/Admin/Admin';
import BlogList from './Components/BlogList/BlogList';
import Dashboard from './Components/Dadshboard/Dashboard';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandinPage/LandingPage';
import LogIn from './Components/Login/LogIn';
import SignUp from './Components/Signup/SignUp';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/addBlog' element={<AddBlog/>} />
        <Route path='/bloglist' element={<BlogList/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

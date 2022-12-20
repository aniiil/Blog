import React from 'react'
import  "./page.css"
import { NavLink } from 'react-router-dom';
const LandingPage=()=> {
  return (
    <><div className="body-box">
     <h1 className="logo">MyBlog</h1>
      <div className="page">
               <div className="text-page">
            <div className="head">
            <h1 className="head-text">Create Your Own Blog </h1>  
            <NavLink to="/signup">
          <button className=" btn-primary">START NOW</button>
          </NavLink> 
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default LandingPage;

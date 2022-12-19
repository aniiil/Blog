import React from 'react';
import "./dash.css";
import { NavLink } from 'react-router-dom';
function Dashboard() {
  return (
    <>
    <div className="dashboard-bg">
    <div className="navbar">
        <div className="left-div">
          <h1 className="logo2">MyBlog</h1>
        </div>
        <div className="right-div">
          <div className="r-link">
            <NavLink className="nav-link " to="/bloglist">
             Blog List
            </NavLink>
            <NavLink className="nav-link " to="/dashboard">
              Users List
            </NavLink>
          </div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Dashboard;

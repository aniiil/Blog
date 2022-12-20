import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
const  Nav=(props) =>{
  return (
    <>
      <div className="navbar">
        <div className="left-div">
          <h1 className="logo2">MyBlog</h1>
        </div>
        <div className="right-div">
          <div className="r-link">
            <NavLink className="nav-link " to={props.path}>
              {props.btn}
            </NavLink>
            <NavLink className="nav-link " to={props.path2}>
              {props.btn2}
            </NavLink> 
            <NavLink className="nav-link " to={props.path3}>
              {props.btn3}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

import React from "react";
import "./home.css";
import Nav from "../Navbar/Nav";
const Home=()=> {
  return (
    <>
      <div className="home-box">
        <Nav btn="Add BLog" btn2="Veiw Blog" btn3="Signup/Login" path="/addBlog" path2="/home" path3="/signup" />
      </div>
    </>
  );
}

export default Home;

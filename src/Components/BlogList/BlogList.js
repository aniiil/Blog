import React from 'react';
import Nav from '../Navbar/Nav';

  const BlogList=()=> {
  return (
    <>
     <Nav
        btn="Blog List"
        btn2="User List"
        btn3="Logout"
        path="/bloglist"
        path2="/dashboard"
        path3="/admin"
      />
      
    </>
  )
}

export default BlogList;

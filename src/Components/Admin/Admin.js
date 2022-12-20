import React ,{useState}from 'react';
import "./admin.css";
import { NavLink ,useNavigate} from 'react-router-dom';
const Admin=()=> {

  const Navigate = useNavigate();

  const [admin, setAdmin] = useState({
  email: "",
  pass: "",

  });
  

  const [errMsg, setErrMsg] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();
    const {  email, pass } = admin;
    const admail= "admin2000@gmail.com";
    const adpass= "2000@admin";
    if ( !email || !pass  ) {
      setErrMsg("!...All field is required");
    } else if (!email.includes("@")) {
      setErrMsg("!...enter valid email address");
    } else if (pass.length < 6) {
      setErrMsg("!...password should be at least 6 characters");
    } else if(email!==admail ){
      setErrMsg("!...please enter correct mail id");
      setBtnDisable(true);
    }else if(pass!==adpass){
      setErrMsg("!...please enter correct password");
      setBtnDisable(true);

    }
    else {
      setErrMsg("");
          setBtnDisable(false); 
          alert("Login Successfully..");
          Navigate("/dashboard");
       
    }
  };

  return (
    <>
       <div className="body3">
         <NavLink to="/" > <h1 className="logo2">MyBlog</h1></NavLink>
     <h1 className="header">Admin Login</h1>

      <div className="signup-box">
      <div className="right-box"></div>
    <div className="form-container2">
    <div className="line2"></div>
<form className='form-data'>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setAdmin((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <input
                  type="password"
                  name="pass"
                  placeholder="Enter password"
                 required
                  onChange={(e) =>
                    setAdmin((prev) => ({ ...prev, pass: e.target.value }))
                  }
                />
                <b className="err-msg"> {errMsg}</b>
                <div className="submit2">
                  <button onClick={onSubmit}  disabled={btnDisable}  className="form-btn">Login
                  </button>
              
                </div>
                <p className="logtext2">
                    Log in as a user.
                    <NavLink to="/login">
                      <span> Log in</span>
                    </NavLink>
                  </p>
             
</form>

    </div>
   </div>
   </div>
   
   
    </>
  )
}

export default Admin;

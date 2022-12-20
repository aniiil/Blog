import React, { useState } from "react";
import "./signup.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { db } from "../Firebase/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";

const  SignUp=()=> {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
    cfpass: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, pass, cfpass } = user;

    if (!name || !email || !pass || !cfpass) {
      setErrMsg("!...All field is required");
    } else if (name.length < 4) {
      setErrMsg("!...name is too short");
    } else if (!email.includes("@")) {
      setErrMsg("!...enter valid email address");
    } else if (pass.length < 6) {
      setErrMsg("!...password should be at least 6 characters");
    } else if (cfpass !== pass) {
      setErrMsg("!...password and confirm password not matched");
    } else {
      // console.log("sub");
      setErrMsg("");
      setBtnDisable(true);
     
      createUserWithEmailAndPassword(auth, email, pass)
        .then( (res) => {
          let user = res.user;
           updateProfile(user, { displayName: name });
          console.log(user);
          setBtnDisable(false);
          alert("Signup Successfully..");
        })
        .catch((err) => {
          setBtnDisable(false);
          console.log("Error-", err);
          setErrMsg(err.message);
          // alert("err");

          
        });
       
      addDoc(collection(db, "User"), { user })
        .then(() => {
          setBtnDisable(false);
          alert("Blog Added Successfully");
          Navigate("/home")
        })
        .catch((err) => {
          console.log("ERROR", err);
          setErrMsg(err.message);
          setBtnDisable(false);
        });
    

    }
  };

  return (
    <>
      <div className="body">
        <NavLink to="/">
          <h1 className="logo2">MyBlog</h1>
        </NavLink>
        <h1 className="header">Sign Up</h1>

        <div className="signup-box">
          <div className="form-container">
            <form className="form-data">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter username"
                required
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <input
                type="password"
                name="pass"
                placeholder="Enter password"
                required
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, pass: e.target.value }))
                }
              />
              <input
                type="password"
                name="cfpass"
                placeholder="Confirm password"
                required
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, cfpass: e.target.value }))
                }
              />
              <b className="err-msg"> {errMsg}</b>
              <div className="submit">
                <button
                  onClick={onSubmit}
                  disabled={btnDisable}
                  className="form-btn"
                >
                  Signup
                </button>
              </div>
              <p className="logtext">
                Already Have an Account?
                <NavLink to="/login">
                  <span> Log in</span>
                </NavLink>
              </p>
            </form>

            <div className="line"></div>
          </div>
          <div className="right-box"></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

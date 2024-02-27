import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()
 

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post('https://baigan-rose.vercel.app/',{name,email,password})
    .then(result => {
      // console.log(result)
      
      navigate("/login")
    
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <div className="form-box">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="i" />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="i" />
              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="i" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
          </div>
          <div className="acc">
            <Link to="/login" className="link">Already have an account</Link>
          </div>
          <button type="submit" id="signup">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

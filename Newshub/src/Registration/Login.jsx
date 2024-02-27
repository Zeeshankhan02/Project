import React from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://baigan-rose.vercel.app/logIn', { email, password })
      .then((result) => {
        console.log(result);
        if(result.data ==="Success"){
          navigate("/home");

          setTimeout(()=>alert("Successfully logedIn"),2400)
  
        }else if(result.data === "Incorrect Password"){
          alert(`${result.data}`);
        }else{
          alert("User Not Found")
        }
      })
      .catch((err) => console.log(err));
    }
    return (
      <div className="container">
        <div className="form-box">
          <h1>LogIn</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="i" />

              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="i" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="acc">
              <Link to="/" className="link">
                Don't have an account?
              </Link>
            </div>

            <button type="submit" id="signup">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

export default Login;

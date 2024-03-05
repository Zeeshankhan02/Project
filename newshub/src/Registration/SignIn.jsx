import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/spinner"; 
function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    axios
      .post("https://baigan-rose.vercel.app/", { name, email, password })
      .then((result) => {
        setTimeout(() => {
          setShowSpinner(false);
          navigate("/home");
        }, 3000);
      })
      .catch((err) => {
        setShowSpinner(false);
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>SignIn</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="i" />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
          </div>
          <div className="acc">
            <Link to="/login" className="link">
              Already have an account
            </Link>
          </div>
          <button type="submit" id="signup">
            SignIn
          </button>
          {showSpinner && <Spinner></Spinner>} {/* Show spinner when loading */}
        </form>
      </div>
    </div>
  );
}

export default SignIn;

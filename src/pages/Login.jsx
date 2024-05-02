import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../Firebase";



const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
  <div className="FormContainer">
    <div className="FormWrapper">
      <span className="logo">D ChatZ</span>
      <span className="title">Login</span>
      <form onSubmit={handleSubmit} >
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input style={{display:"none"}} type="file" id="file"/>
        <button>Login</button>
      </form>
      <p>You don't have an account?<Link to="/register">register</Link> </p>
    </div>
    <ToastContainer />
  </div>
  )
};

export default Login;

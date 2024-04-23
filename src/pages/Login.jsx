import React from "react";



const Login = () => {
  return (
  <div className="FormContainer">
    <div className="FormWrapper">
      <span className="logo">D ChatZ</span>
      <span className="title">Login</span>
      <form >
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input style={{display:"none"}} type="file" id="file"/>
        <button>Login</button>
      </form>
      <p>You don't have an account? register</p>
    </div>
  </div>
  )
};

export default Login;

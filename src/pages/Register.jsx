import React from "react";
import AddImg from "../../public/images/addAvatar.png"


const Register = () => {
  return (
  <div className="FormContainer">
    <div className="FormWrapper">
      <span className="logo">D ChatZ</span>
      <span className="title">Register</span>
      <form >
        <input type="text" placeholder="Full Name"/>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input style={{display:"none"}} type="file" id="file"/>
        <label htmlFor="file">
          <img src={AddImg} alt="" />
          <span>Add an image</span>
          </label>
        <button>Sign Up</button>
      </form>
      <p>You do have an account? Login</p>
    </div>
  </div>
  )
};

export default Register;

import React from 'react'
import './CSS/LoginSignup.css'
function Login() {
  return (
    <div className='loginsigup'>
      <div className='loginsignup-container'> 
        <h1>Sign Up</h1>
        <div className='logignsignup-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Your Name' />
        </div>
        <button>Continue</button>
        <p className='loginsigup-login'>Allready have an account?<span>Login here</span></p>
        <div className='loginsigup-agree'>
          <input type='checkbox' name='checkbox'  id='' name="" / >
          <p>By Continue, i agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default Login
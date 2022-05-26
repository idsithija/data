import React, { useState, useContext } from 'react'
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.scss';

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {isFetching, dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({email,password}, dispatch);
  }

  return (
    <div className='login-p'>
      <div className='w-container wp-login'>
        <div className='login-wrapper'>
          <h1>Test</h1>
          <form>
            <div>
              <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
              <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className='btn' onClick={handleLogin} disabled={isFetching}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
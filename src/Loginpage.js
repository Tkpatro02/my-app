import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Loginpage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="login-page">
      
     <h1 className='welcome-top'>Welcome to OpenBooks.com - Your Gateway to Knowledge</h1>
     
    
      <div className="welcome-container">
        
        <h2 className='welcome-postion'> </h2>
        
        
      </div>
      
      <div className="login-container">
      
        </div>
     
        <div className="login-form">
          
        
         
          <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email" className="white-label">Email</label>
            <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            </div>
            <div className="form-group">
              <label htmlFor="password"className="white-label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">
        <Link to="/login">Login</Link>
      </button>
      
          </form>
          <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
        </div>
      </div>
    
  );
}

export default LoginPage;

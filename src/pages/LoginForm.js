import React from 'react';
import "../styles/LoginForm.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
    return (
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
            <div className='login'>
                <h2 className='mb-3'>Login Form</h2>
                
                <div className='form-group mb-2'>
                    <label htmlFor='email'>Email Address</label>
                    <input type="email"></input>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor='password'>Password</label>
                <input type="password"></input>
            </div>
            <div className='form-group mb-2'>
                <input type="checkbox"></input>
                <label htmlFor='check'>Remember me</label>
        </div>
        <button type='submit' className='btn btn-success mt-2'>SIGN IN</button>
        </div>
        
        </div>
       
    )
}

export default LoginForm
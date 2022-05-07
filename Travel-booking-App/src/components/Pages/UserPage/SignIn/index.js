import { Link } from 'react-router-dom'
import './signin.css'
import React, { useState, useEffect } from 'react'



export const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='container'>
            <h1>Sign in</h1>
            <form className='input-form'>
                <label>Email</label>
                <input
                    placeholder='Email'
                    type='text'
                    onChange={
                        (e) => setEmail(e.target.value)
                    }
                />

                <label>Password</label>
                <input
                    placeholder='Password'
                    type='password'
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                />

            </form>
            <div>
                <input type='checkbox' id='checkbox' name='checkbox' />
                <label htmlFor='checkbox'>Remmber me</label>
            </div>
            <button>Sign In</button>
            <div className='help-div'>
                <p><Link to=''>Forgot password?</Link></p>
                <p><Link to='/signup'>Create an account</Link></p>
            </div>
            <div><p>By signing in, I angree to Agoda's <a href='https://www.google.com'>Term of Use</a> and <a href='https://www.google.com'>Privacy Policy.</a></p></div>
            
        </div>
    )
}
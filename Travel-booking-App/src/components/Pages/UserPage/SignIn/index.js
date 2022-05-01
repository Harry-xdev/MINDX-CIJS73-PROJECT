import { Link } from 'react-router-dom'
import './signin.css'


export const SignIn = () => {
    return (
        <div className='container'>
            <h1>Sign in</h1>
            <form className='input-form'>
                <label>Email</label>
                <input placeholder='Email' />
                <label>Password</label>
                <input type='password' placeholder='Password' />
                <label>Comfirm password</label>

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
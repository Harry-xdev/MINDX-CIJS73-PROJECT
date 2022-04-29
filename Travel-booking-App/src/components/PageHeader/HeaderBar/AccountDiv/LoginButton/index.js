import { Link } from 'react-router-dom'
import './login.css'
export const LoginButton = () => {

    return (
        <Link to='/login' className='login-btn btn login-link'>Login</Link>
    )
}
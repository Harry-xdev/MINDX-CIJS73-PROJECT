import { Link } from 'react-router-dom'
import './login.css'
export const LoginButton = () => {

    return (
        <Link to='/signin' className='login-btn btn login-link'>Sign in</Link>
    )
}
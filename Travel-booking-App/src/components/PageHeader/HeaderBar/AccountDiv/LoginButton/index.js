import { NavLink } from 'react-router-dom'
import './login.css'
export const LoginButton = () => {

    return (
        <NavLink to='/signin' className='login-btn btn login-link'>Sign in</NavLink>
    )
}
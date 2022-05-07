import { NavLink } from 'react-router-dom'
import './signup.css'
export const SignupButton = () => {

    return (
        <NavLink to='/signup' className='signup-btn btn signup-link'>Create account</NavLink>
    )
}
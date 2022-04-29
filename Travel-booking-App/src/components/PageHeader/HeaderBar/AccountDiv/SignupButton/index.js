import { Link } from 'react-router-dom'
import './signup.css'
export const SignupButton = () => {

    return (
        <Link to='/signup' className='signup-btn btn signup-link'>Create account</Link>
    )
}
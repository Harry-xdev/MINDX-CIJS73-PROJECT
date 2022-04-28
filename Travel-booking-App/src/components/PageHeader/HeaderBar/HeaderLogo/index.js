import { Link } from 'react-router-dom'
import './logo.css'
export const HeaderLogo = () => {

    return (
        <div className="main-logo">
            <Link to='/home' >Logo</Link>
        </div>
    )
}

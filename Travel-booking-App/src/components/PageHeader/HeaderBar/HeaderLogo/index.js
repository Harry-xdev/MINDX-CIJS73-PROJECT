import { Link } from 'react-router-dom'
import './logo.css'
export const HeaderLogo = () => {

    return (
        <div >
            <Link to='/' >
                <img className="main-logo" src={require('./logo.png')}/>
            </Link>
        </div>
    )
}

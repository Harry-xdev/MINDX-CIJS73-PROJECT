import { NavLink } from 'react-router-dom'
import './container.css'

export const NativeContainer = () => {
    return (
        <div className="native-cont">
            <ul>
                {/* <li>
                    <NavLink to='/hotels'>Hotels</NavLink>
                </li> */}
                {/* <li>
                    <NavLink to='/city'>Best City</NavLink>
                </li> */}
                <li>
                    <NavLink to='/payment'>Payment</NavLink>
                </li>

            </ul>

        </div>
    )
}
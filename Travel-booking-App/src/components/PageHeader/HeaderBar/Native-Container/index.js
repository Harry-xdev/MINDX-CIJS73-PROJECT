import { NavLink } from 'react-router-dom'
import './container.css'

const activeClass = (params) => {  return params.isActive ? "active-item" : ""}

export const NativeContainer = () => {
    return (
        <div className="native-cont">
            <ul>
                <li>
                    <NavLink to='/' id='headerHome' className={ activeClass }>Trang Chủ</NavLink>
                </li>
                <li>
                    <NavLink to='/discount'  id='headerDiscount' className={activeClass}>Các Chương Trình Khuyến Mãi</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/payment'>Payment</NavLink>
                </li> */}

            </ul>

        </div>
    )
}
import { NavLink } from 'react-router-dom'

export const NavDiv = () => {
    return (
        <div>
            <NavLink to='/email'>Email</NavLink>
            <NavLink to='/phone'>Mobile Phone</NavLink>
        </div>
    )

}
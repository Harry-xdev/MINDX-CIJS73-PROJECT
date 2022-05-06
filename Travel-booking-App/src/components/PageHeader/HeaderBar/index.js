import { AccountDiv } from './AccountDiv'
import './header.css'
import { HeaderLogo } from './HeaderLogo'
import { NativeContainer } from './Native-Container'
// import { Route } from 'react-router-dom'
// import { HomePage } from '../../Pages/HomePage/home'

export const HeaderBar = () => {

    return (
        <div className="header-bar">
            <HeaderLogo />
            
            <NativeContainer />
            <AccountDiv />

 



        </div>
    )
}

export * from './Native-Container'
export * from './AccountDiv'
export * from './HeaderLogo'

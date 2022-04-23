import { AccountDiv } from './AccountDiv'
import './header.css'
import { HeaderLogo } from './HeaderLogo'
import { NativeContainer } from './Native-Container'
export const HeaderBar = () => {
    
    return (
        <div className="header-bar">
            <HeaderLogo />
            <NativeContainer />
            <AccountDiv />




            
        </div>
    )
}
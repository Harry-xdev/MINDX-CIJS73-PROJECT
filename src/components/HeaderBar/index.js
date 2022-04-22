import './header.css'
import { HeaderLogo } from './HeaderLogo'
import { LoginButton } from './LoginButton'
import { NativeContainer } from './Native-Container'
export const HeaderBar = () => {
    
    return (
        <div className="header-bar">
            <HeaderLogo />
            <NativeContainer />
            <LoginButton />
        </div>
    )
}
import './account.css'
import { LoginButton } from './LoginButton'
import { SignupButton } from './SignupButton'

export const AccountDiv = () => {

    return (
        <div className='account-div'>
            <span className='btn-span'>
                <LoginButton />
                <SignupButton />
            </span>



        </div>
    )
}

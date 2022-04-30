import { EmailForm } from './byEmail'
import { PhoneForm } from './byPhone'
import { NavDiv } from './navDiv'
import { Route, Routes } from 'react-router-dom'


export const ContainerForm = () => {
    return (
        <div className='container'>
        <h1>SIGN UP</h1>
        <NavDiv />
        {/* <EmailForm />
        <PhoneForm /> */}
        <Routes>
            <Route path='/login' element={<EmailForm />} />
            <Route path='/login/phone' element={<PhoneForm />} />
        </Routes>
        



        <div>
            <input type='checkbox' id='checkbox' name='checkbox' />
            <label htmlFor='checkbox'>Remmber me</label>
        </div>
        <button>Sign Up</button>
        <button>Already have an account? Sign in</button>
        <div><p>By signing in, I angree to Agoda's <a href='https://www.google.com'>Term of Use</a> and <a href='https://www.google.com'>Privacy Policy.</a></p></div>

    </div>
    )
}
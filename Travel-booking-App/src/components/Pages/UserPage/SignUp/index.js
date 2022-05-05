import { useEffect, useState } from 'react'
import './signup.css'

export const SignUp = () => {

    const [accounts, setAccounts] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState([""])
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const fecthData = async () => {
        const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList')
        const accData = await response.json()
        setAccounts(accData)
    }

    useEffect(() => {
        fecthData()
    }, [])
    console.log(accounts)

    // function submit() {
    //     console.warn(firstName, lastName, email, password, repassword)
    // }

    const addNewAccount = ({firstName, lastName, email, password}) => {
        const res = fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({firstName, lastName, email, password}),
        })
    }

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form className='input-form'>
                <label>First Name</label>
                <input placeholder='Your first name'
                    type='text'
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label>Last Name</label>
                <input placeholder='Your last name'
                    type='text'
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label>Email</label>
                <input placeholder='Email'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input placeholder='Password'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Comfirm password</label>
                <input placeholder='Comfirm password'
                    type='password'
                    onChange={(e) => setRepassword(e.target.value)}
                />
            </form>
            <div>
                <input type='checkbox' id='checkbox' name='checkbox' />
                <label htmlFor='checkbox'>Remmber me</label>
            </div>
            <button onClick={addNewAccount} >Sign Up</button>
            <button>Already have an account? Sign in</button>
            <div><p>By signing in, I angree to Agoda's <a href='https://www.google.com'>Term of Use</a> and <a href='https://www.google.com'>Privacy Policy.</a></p></div>

        </div>
    )
}
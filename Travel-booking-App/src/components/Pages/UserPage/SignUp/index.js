import { useEffect, useState } from 'react'
import './signup.css'

export const SignUp = () => {
    
    const [accounts, setAccounts] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cfmpassword, setCfmpassword] = useState("")

    

    const fecthData = async () => {
        const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList')
        const accData = await response.json()
        setAccounts(accData)
        
    }

    useEffect(() => {
        fecthData()
    }, [])
    console.log(accounts)

    // let arrEmail = accounts.filter(emailList)
    // const emailList = () => {
    //     email
    // }
    // console.log(arrEmail)

    const addNewAccount = ({firstName, lastName, email, password, cfmpassword}) => {
        fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({firstName, lastName, email, password, cfmpassword}),
        })
    }

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form className='input-form'>
                <label>First Name</label>
                <input placeholder='Your first name'
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label>Last Name</label>
                <input placeholder='Your last name'
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label>Email</label>
                <input placeholder='Email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input placeholder='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Comfirm password</label>
                <input placeholder='Comfirm password'
                    type='password'
                    value={cfmpassword}
                    onChange={(e) => setCfmpassword(e.target.value)}
                />
            </form>
            <div>
                <input type='checkbox' id='checkbox' name='checkbox' />
                <label htmlFor='checkbox'>Remmber me</label>
            </div>
            <button
                onClick={() => {
                    
                    addNewAccount({
                        firstName: firstName,
                        lastName: lastName,
                        email : email,
                        password : password,
                        cfmpassword: cfmpassword,
                    })
                    

                    alert(`You have signed up!`)
                }}>Sign Up
            </button>
            <button>Already have an account? Sign in</button>
            <div><p>By signing in, I angree to Agoda's <a href='https://www.google.com'>Term of Use</a> and <a href='https://www.google.com'>Privacy Policy.</a></p></div>

        </div>
    )
}
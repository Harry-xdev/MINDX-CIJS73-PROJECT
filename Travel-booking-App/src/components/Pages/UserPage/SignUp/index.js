import { useEffect, useState, useContext } from 'react'
import './signup.css'
import { AlertBar } from './alert'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const SignUp = () => {

    const [accounts, setAccounts] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cfmpassword, setCfmpassword] = useState("")

    const [i, setI] = useState("")

    const fecthData = async () => {
        const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList')
        const accData = await response.json()
        setAccounts(accData)
    }

    useEffect(() => {
        fecthData()
    }, [])
    // console.log(accounts)

    const arrEmail = accounts.filter(function (item) {
        return item.email === email
    })
    // console.log("arrEmail:", arrEmail)
    // console.log(arrEmail.length)

    const alert = [
        "*Please input email!",
        "*This email has been used, please choose another email!",
        "*You can use this email!",
        "*Register successfully",
        "*Password does not matched!",
        "*Please input your first name!",
        "*Please input your last name!",
        "*Please input your password!",
        "*Please re-input your password!",
    ]



    const checkEmail = (event) => {
        event.preventDefault()
        if (email === "") {
            setI(0)
        } else if (arrEmail.length === 0) {
            setI(2)
        } else {
            setI(1)
        }
    }

    let navigate = useNavigate()
    const redirectFunc = () => {
        setTimeout(() => { navigate('/signin') }, 2000)
    }

    const handleSubmit = () => {
        if (firstName === "") {
            setI(5)
        } else if (lastName === "") {
            setI(6)
        } else if (password === "") {
            setI(7)
        } else if (cfmpassword === "") {
            setI(8)
        } else if (cfmpassword !== password) {
            setI(4)
        } else {
            setI(3)
            addNewAccount({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                cfmpassword: cfmpassword,
            })
            redirectFunc()
        }
    }

    const addNewAccount = ({ firstName, lastName, email, password, cfmpassword }) => {
        fetch('https://6268162901dab900f1c9969b.mockapi.io/appi/v1/userList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password, cfmpassword }),
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
                <div>
                    <input placeholder='Email'
                        type='email'
                        value={email}
                        id="email-input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button id='check-btn' onClick={checkEmail}>Check</button>
                </div>
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
                <div style={{ height: 15 }}><AlertBar alert={alert[i]} /></div>
            </form>
            {/* <div> */}
                {/* <input type='checkbox' id='checkbox' name='checkbox' /> */}
                {/* <label htmlFor='checkbox'>Remmber me</label> */}
            {/* </div> */}
            <button className='submit-btn'
                onClick={() => {
                    handleSubmit()
                }}>Sign Up
            </button>
            <div>Already have an account? <Link to='/signin'>Sign in</Link></div>
            <div><p>By signing in, I angree to Agoda's <a href='https://www.google.com'>Term of Use</a> and <a href='https://www.google.com'>Privacy Policy.</a></p></div>

        </div>
    )
}
import './signup.css'


export const SignUp = () => {
    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form className='input-form'>
                <label>First Name</label>
                <input placeholder='Your first name' />
                <label>Last Name</label>
                <input placeholder='Your last name' />
                <label>Email</label>
                <input placeholder='Email' />
                <label>Password</label>
                <input type='password' placeholder='Password' />
                <label>Comfirm password</label>
                <input placeholder='Comfirm password' />
            </form>
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
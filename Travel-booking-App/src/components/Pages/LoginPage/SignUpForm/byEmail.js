import './byEmail.css'
export const EmailForm = () => {
    return (
        <div>
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
        </div>
    )
}
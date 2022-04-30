import './byPhone.css'

export const PhoneForm = () => {
    return (
        <div>
            <form className='input-form'>
                <label>Mobile number</label>
                <input placeholder='Mobile number' />
                <label>Password</label>
                <input type='password' placeholder='Password' />
                <label>Comfirm password</label>
                <input placeholder='Comfirm password' />
            </form>
        </div>
    )
}
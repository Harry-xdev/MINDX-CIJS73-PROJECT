import {Outlet} from 'react-router-dom'
import {PaymentForm} from './PaymentForm/PaymentForm.js'
export const Payment = () => {
    return (
        <div>
            Đặt Phòng
            <Outlet/>
        </div>
    )
}
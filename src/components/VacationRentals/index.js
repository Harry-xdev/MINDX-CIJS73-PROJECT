import './container.css'
import { Item } from './RentalItems'

export const VacationRentals = () => {

    return (
        <div className="rentals-container">
            <div className="container-title">
                Vacation Rentals

            </div>

            <div className="item-container">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

        </div>

    )
}
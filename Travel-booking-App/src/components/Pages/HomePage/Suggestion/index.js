import './suggestion.css'
import axios from 'axios'
export const Suggestion = () => {

    const handleFetchHotelList = async ({suggest}) => {
        const response = await fetch(`https://6268162901dab900f1c9969b.mockapi.io/hotelList/:${suggest}`)
        const data = await response.json();
    }

    return (
    <div className="suggestion">
            suggestion
        </div>
    )
}
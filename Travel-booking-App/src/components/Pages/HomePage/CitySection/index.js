import { useState , useEffect} from 'react'
import './city.css'
import {Link } from 'react-router-dom'
const CityList = [
    {
        id : 1,
        name : 'Đà Lạt',
        url : './CityImg/Đà Lạt.jpg'
    },
    {
        id : 2,
        name : 'Hội An',
        url : './CityImg/Hội An.jpg'
    },
    {
        id : 3,
        name : 'Nha Trang',
        url : './CityImg/Nha Trang.jpg'
    },
    {
        id : 4,
        name : 'Phú Quốc',
        url : './CityImg/Phú Quốc.jpg'
    }
]



export const CitySection = () => {
  


const [city , setCity ] = useState(CityList)

const handleRenderCity = () => {
    setCity(city)
}

useEffect(() => {
    handleRenderCity()
})


    return <div>
        <h3> Các điểm đến thu hút </h3>
     <div className='cityContainer'>
      
        {
            city.map((city) => {
                return <div key={city.id} className='city'>
                    <Link to={`/city/${city.name}`} >
                    <img className="cityImg" src={require(`` + city.url + ``)}/>
                    <div>
                    {city.name}
                    </div>
                    </Link>
                    </div>
                    
            })
        }

    </div>
    </div>
}
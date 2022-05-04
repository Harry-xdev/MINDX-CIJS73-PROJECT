import './container.css'
import {useState, useEffect} from 'react'

const Rentals = [
    {
        id:1,
        name: 'Căn hộ',
        url: './img/Căn hộ.jpg'
    },
    {
        id:2,
        name: 'Nhà cho thuê',
        url: './img/Nhà cho thuê.jpg'
    },
    {
        id:3,
        name: 'Biệt thự',
        url: './img/Biệt thự.jpg'
    },
    {
        id:4,
        name: 'Nhà trệt',
        url: './img/Nhà trệt.jpg'
    }
]



export const VacationRentals = () => {

    const [items, setItem] = useState(Rentals)

   

    useEffect(()=>{
        setItem(items)
    },[])


    return (
        <div className="rentals-container">
            <div className="container-title">
                Khám phá thêm các loại hình nhà cho thuê du lịch

            </div>

            <div className="item-container">
                {
                    items.map( (item) => {
                       return <div>
                              <div>
                                  <div>
                                      <img src={require(``+item.url+``)}/>
                                  </div>
                                  <div>
                                      {item.name}
                                   </div>   
                            </div>
                           </div>

                    })
                }
            </div>

        </div>

    )
}
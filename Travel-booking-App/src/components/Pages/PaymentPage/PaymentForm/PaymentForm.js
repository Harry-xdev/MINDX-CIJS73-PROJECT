// khung import steps
import {useParams} from "react-router-dom"
import {useEffect , useState, Form} from 'react'
import './pay.css'


export const PaymentForm = () => {

    const params = useParams()
    console.log(params)
    
    const [paymentDetails, setPaymentDetail] = useState([])

    const handleFetchHotelListDetail = async () => {
        const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/hotelList')
        const dataHotel = await response.json();  
        const data = dataHotel.filter((item) => {
              return item.id === params.id
        })
        console.log('city ' ,data)
        setPaymentDetail(data)
    
    }

    useEffect(() => {
        handleFetchHotelListDetail()
    }, [])


    return (
        <div className='pay'>
         
            {
                paymentDetails.map((hotel) => {
                    return <div>
                    <div>
                        <div>
                            <img src={hotel.img1} />
                        </div>
                         <div>
                             {hotel.name}
                        </div>
                        <div>
                             {hotel.star}
                        </div>
                        <div>
                             {hotel.addressDetail}
                        </div>
                    </div>
                    <div key={hotel.id} className='payContainer'> 
                        <div>
                            <div className='payTitle'>
                                Vui lòng điền thông tin của bạn
                            </div>
                            <div className='payDetailContainer'>
                                <div>
                                Họ và tên trong hộ chiếu / CMND / CCCD
                                </div>
                               <input/>
                            </div>
                            <div  className='payDetailContainer'>
                                <div>
                                 Email
                                </div>
                               <input/>
                            </div>
                            <div  className='payDetailContainer'>
                                <div>
                                  Số điện thoại
                                </div>
                               <input/>
                            </div>
                            <div  className='payDetailContainer'>
                                <div>
                                Yêu cầu thêm
                                </div>
                                <input/>
                            </div>
                    </div>
                    <div>
                    <button className='payBtn'>Bước Kế Tiếp</button>
                    </div>
                 </div>
                 </div>
                })
            }
        </div>
    )
}
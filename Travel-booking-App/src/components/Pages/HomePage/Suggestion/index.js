import './suggestion.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { BsStarFill,BsFillChatLeftFill } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { NavLink } from 'react-router-dom';
 

export const Suggestion = () => {

    const [suggestionHotels, setSuggestionHotels] = useState([])

    const handleFetchHotelList = async () => {
        const response = await fetch('https://6268162901dab900f1c9969b.mockapi.io/hotelList')
        const dataHotel = await response.json();  
        const data = dataHotel.filter((item) => {
              return item.suggest === 'true'
        })
        // console.log(data)
        setSuggestionHotels(data)
        
    }
    
    useEffect(() => {
        handleFetchHotelList()
    }, [])
//     const star = (suggestionHotel) => {
//         for(let i=1; i <= suggestionHotel.star; i++ ){
//         <BsStarFill style={{color : 'orange'}}/>
//    }
//    }
    return (
    <div className="suggestionContainer">
       <div className='suggestionTitle'>Những chỗ nghỉ nổi bật, đề xuất</div>
        <div  className="suggestionSubContainer" >
            {
                suggestionHotels.map(suggestionHotel => {
                    return <div key={suggestionHotel.id} className='suggestionHotelCard'> 
                   <div className='bgDetailHotelCard'> </div>
                  <div className="suggestionHotelCardInside" >  
                    <img src={require(``+suggestionHotel.img1+``)} className="suggestionHotelImg"/>
                    <div className='suggestHotelCardInfo'>
                         <div className='suggestHotelCardName'>   
                             {suggestionHotel.name}
                         </div>    
                         <div className='suggestHotelCardDetail'> 
                            <div className='suggestHotelCardStar'>
                             {suggestionHotel.star} 
                             <BsStarFill style={{color : 'orange'}}/> 
                             </div>
                             <div className='suggestHotelCardAddress'> 
                                 <IoMdPin style={{color : 'red'}}/>
                             <i> {suggestionHotel.address} </i>
                             </div>
                         </div>
                         <div className='suggestHotelCardIntro'>
                             <i>"{suggestionHotel.introduce}" </i>
                         </div>
                    </div>
                   </div> 
                       <div className='suggestHotelCardRatingCon'>
                         <div className='suggestHotelCardRating'>
                             <div> <BsFillChatLeftFill/> </div> 
                              <div id='ratingNumber'> {suggestionHotel.totalRating} </div>
                         </div>
                         
                         <div className='suggestHotelCardPrice'>
                         <div className='suggestPriceTitle'> Giá mỗi đêm từ </div>
                             <div  className='suggestPrice'> {suggestionHotel.averagePrice}<span>VND</span> </div>
                         </div>
                         <NavLink to={`/hotels/${suggestionHotel.id}`}> <button className='checkRooms'>Kiểm tra phòng trống</button> </NavLink>
                       </div>
                    </div>
                })
            }
        </div>
          <img id="bgPicSug" src={require('./bgPic/bgPic.jpg')}/>
          <img id="bgPicSug2" src={require('./bgPic/bgPic2.jpg')}/>
          <img id="bgPicSug3" src={require('./bgPic/bgPic3.jpg')}/>
          
        </div>
    )
}
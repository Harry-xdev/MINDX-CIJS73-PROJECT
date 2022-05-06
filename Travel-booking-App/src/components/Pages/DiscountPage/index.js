import './discount.css'
import {useState, useEffect} from 'react'
export const DiscountPage = () => {

const RandomPicList = [
    {
       url : './img/1.png'
    },
    {
        url : './img/2.png'
     },
     {
        url : './img/3.png'
     },
     {
        url : './img/4.png'
     },
     {
        url : './img/5.png'
     },
     {
        url : './img/6.png'
     },
     {
        url : './img/7.png'
     },  
]

const backGroundPic = ['./img/bg.jpg']

const discountList = [
    {
        url : './img/dis9.png',
        title : 'Mừng trở lại châu Á!',
        detail : 'Trở lại du lịch với mức giảm thêm 10% dành cho du khách quốc tế'
    },
    {
        url : './img/dis8.png',
        title : 'Vé Ưu Đãi Đặc Biệt!',
        detail : 'Hãy sử dụng vé này để mở khóa giá đặc biệt cho các khách sạn'
    },
    {
        url : './img/dis3.png',
        title : 'GIẢM GIÁ 3%',
        detail : ''
    },
    {
        url : './img/dis5.png',
        title : 'GIẢM GIÁ 5%',
        detail : ''
    },
    {
        url : './img/dis6.png',
        title : 'GIẢM GIÁ 6%',
        detail : ''
    },
    {
        url : './img/dis7.png',
        title : 'GIẢM GIÁ 7%',
        detail : ''
    },
    {
        url : './img/dis8.png',
        title : 'Vé Ưu Đãi Đặc Biệt!',
        detail : 'Hãy sử dụng vé này để mở khóa giá đặc biệt cho các khách sạn'
    },
    {
        url : './img/dis9.png',
        title : 'Mừng trở lại châu Á!',
        detail : 'Trở lại du lịch với mức giảm thêm 10% dành cho du khách quốc tế'
    },
    {
        url : './img/dis10.png',
        title : 'Nâng cấp Tuyệt vời',
        detail : 'Nâng cấp với việc nâng hạng phòng miễn phí và giảm giá ít nhất 50%'
    },
     
]

const [bgPic , setBgPic] = useState(backGroundPic)
const [randomPic , setRandomPic] = useState(RandomPicList)
const [discountPic , setDiscountPic] = useState(discountList)
useEffect(() => {
    setRandomPic(randomPic)
    setBgPic(bgPic)
    setDiscountPic(discountPic)
},[])

    return <div>
        <div className='randomPicContainer'>
             {
                 randomPic.map((item , index) => {
                    
                     return <div key={index} className='randomPic'>
                              <div>
                                 <img src={require(``+ item.url+``)}/>
                              </div>
                              
                        </div>
                 })
             }
            
        </div>
        <div>
           {bgPic.map((item , index) => {
               return <div key={index}>
                    <div >
                     <img className='discountBg'  src={require(``+ item+``)}/>
                    </div>
                   </div>
           })}
           
        </div>
        <div className='discountPicBg'>
                 {
                     discountPic.map((item , index) => {
                         return <div key={index}>
                                       <div className='discountPicCard'>
                                            <div>
                                                <img className='discountPicImg' src={require(``+ item.url +``)}/>
                                            </div>
                                            <div>
                                                 <div className='discountTitle'>
                                                     {item.title}
                                                </div>
                                                <div className='discountDetail'>
                                                    {item.detail}
                                                </div>
                                            </div>
                                        </div>
                             </div>
                     })
                 }
             </div>
    </div>
}
// render tất cả các components về thông tin chi tiết khách sạn
// chia cụ thể thành các components nhỏ hơn

// com1 : summary
// com2 : highlights ( nếu cần - có thể bỏ bớt)
// com3 : convenients (tiện ích)
// com4 : các loại Phòng còn available ( chia làm 2 components con :
//          thông tin phòng + icon tiện ích , thông tin cho khách hàng + giá)
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./hotelDetail.css";
import { BsStarFill,BsFillHandThumbsUpFill } from "react-icons/bs";
const ConvenientList = [
  {
    id: 1,
    name: "Bữa sáng",
    img: "./Img/Convenient-Icon/Bữa sáng.jpg",
  },
  {
    id: 2,
    name: "Đáng tiền nhất",
    img: "./Img/Convenient-Icon/Đáng tiền nhất.jpg",
  },
  {
    id: 3,
    name: "Đưa đón sân bay",
    img: "./Img/Convenient-Icon/Đưa đón sân bay.jpg",
  },
  {
    id: 4,
    name: "Gần phương tiện công cộng",
    img: "./Img/Convenient-Icon/Gần phương tiện công cộng.jpg",
  },
  {
    id: 5,
    name: "Mới sửa sang",
    img: "./Img/Convenient-Icon/Mới sửa sang.jpg",
  },
  {
    id: 6,
    name: "Mới xây dựng",
    img: "./Img/Convenient-Icon/Mới sửa sang.jpg",
  },
  {
    id: 7,
    name: "Nhận phòng 24 giờ",
    img: "./Img/Convenient-Icon/Nhận phòng 24g.jpg",
  },
  {
    id: 8,
    name: "Wifi miễn phí",
    img: "./Img/Convenient-Icon/Wifi miễn phí.jpg",
  },
  {
    id: 9,
    name: "Dọn phòng hằng ngày",
    img: "./Img/Convenient-Icon/Wifi miễn phí.jpg",
  },
  {
    id: 10,
    name: "Bãi biển riêng",
    img: "./Img/Convenient-Icon/Wifi miễn phí.jpg",
  },
];

export const HotelsDetail = () => {
  const params = useParams();
  // console.log(params);

  const [hotelDetails, setHotelDetail] = useState([]);
  const [cmts, setCmt] = useState([]);
  const [userNameIn, setUserNameIn] = useState("");
  const [ratingIn, setRatingIn] = useState(0);
  const [commentIn, setCommentIn] = useState("");

  const [icons, setIcon] = useState(ConvenientList);

  const handleFetchHotelListDetail = async () => {
    const response = await fetch(
      "https://6268162901dab900f1c9969b.mockapi.io/hotelList"
    );
    const dataHotel = await response.json();
    const data = dataHotel.filter((item) => {
      return item.id === params.id;
    });
    // console.log(data);
    setHotelDetail(data);
    // console.log(data.convenient);
  };

  const handleFetchCmt = async () => {
    const response = await fetch(
      `https://6268162901dab900f1c9969b.mockapi.io/appi/v1/comments?idHotel=${params.id}`
    );
    const cmtData = await response.json();
    // console.log("cmt", cmtData);
    setCmt(cmtData === "Not found" ? [] : cmtData);
  };

  // console.log(cmts);

  const creatComment = ({ idHotel, userName, rating, comment }) => {
    setCmt([{ idHotel, userName, rating, comment }, ...cmts]);
    const res = fetch(
      "https://6268162901dab900f1c9969b.mockapi.io/appi/v1/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idHotel, userName, rating, comment }),
      }
    );
  };

  useEffect(() => {
    handleFetchHotelListDetail();
    handleFetchCmt();
    setIcon(icons);
  }, []);

  return (
    <div className="detailHotelContainer">
      {hotelDetails.map((hotelDetail) => {
        // console.log(hotelDetail.convenient);
      
        return (
          <div className="detailSubContainer">
            <div className="detailFirstContainer">
              <div className='imgCon'>
                <img className="mainImg" src={require(``+hotelDetail.img1+``)} />
                 <div id='imgCon'>
                 <img className="subImg" src={require(``+hotelDetail.img2+``)} />
                <img className="subImg" src={require(``+hotelDetail.img3+``)} />
                <img className="subImg" src={require(``+hotelDetail.img4+``)} />
                </div>
              </div>
              <div className="detailInfoContainer">
                <div className="detailName">{hotelDetail.name}</div>
                <div className="detailStar">
                  {hotelDetail.star}
                  <BsStarFill style={{ color: "orange" }} />
                </div>
              </div>
              <div className="detailAddress">{hotelDetail.addressDetail}</div>
              <div className="detailSum">{hotelDetail.summary}</div>
            </div>
            <div className="convenientContainer">
               <div id="tienich"> Tiện ích </div>
              <div className="convenientListContainer">
              {ConvenientList.filter(icon => hotelDetail.convenient.includes(icon.name)).map((icon) => {
                   return <div id='convenientIcon'>
                     <img id='convenientIconImg' src={require(``+icon.img+``)}/>
                     {icon.name}
                     </div>
              })
              }
              </div>
            </div>
            <div>
              <div className="detailRoomTitle">
                Phòng còn trống tại {hotelDetail.name}
              </div>
              <div>
                <div className="detailRoomCard">
                  <div>
                    <img className="detailRoomImg" src={require(``+hotelDetail.room1Img+``)} />
                  </div>
                  <div className='khungNoidung'>
                    <div className="detailRoomName"> {hotelDetail.room1Name}</div>
                    <div id='detailRoom'>
                    <div> Sức chứa {hotelDetail.room1Capacity} người</div>
                    <div id='noidung'>
                    <div> <BsFillHandThumbsUpFill/> Đưa đón sân bay </div>
                    <div><BsFillHandThumbsUpFill/> Wifi miễn phí </div>
                    <div> <BsFillHandThumbsUpFill/> Dọn phòng hằng ngày</div>
                    </div>
                    <div id='roomPrice'> {hotelDetail.room1Price} / đêm </div>
                   

                    </div>
                    <Link to={`/payment/${hotelDetail.id}?room=1`}>
                      <button id='bookingBtn'>Đặt Phòng</button>
                    </Link>
                  </div>
                </div>
                <div className="detailRoomCard">
                  <div>
                    <img className="detailRoomImg" src={require(``+hotelDetail.room2Img+``)} />
                  </div>
                  <div className='khungNoidung'>
                    <div className="detailRoomName"> {hotelDetail.room1Name}</div>
                    <div id='detailRoom'>
                    <div> Sức chứa {hotelDetail.room1Capacity} người</div>
                    <div id='noidung'>
                    <div> <BsFillHandThumbsUpFill/> Đưa đón sân bay </div>
                    <div><BsFillHandThumbsUpFill/> Wifi miễn phí </div>
                    <div> <BsFillHandThumbsUpFill/> Dọn phòng hằng ngày</div>
                    </div>
                    <div id='roomPrice'> {hotelDetail.room1Price} / đêm </div>
                   

                    </div>
                    <Link to={`/payment/${hotelDetail.id}?room=1`}>
                      <button id='bookingBtn'>Đặt Phòng</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cmtBox">
              <div className="cmtTitle">Bài đánh giá về {hotelDetail.name}</div>
              <div className='formCmtLayout'>
              <div className='formCmt'>
                <div id='danhgiaTitle'>Đánh giá của bạn</div>

                <div className='cmtDetail'>
                  <label>Nhập tên đăng nhập:</label>
                  <input
                  id='inputText'
                    type="text"
                    placeholder="tên đăng nhập ..."
                    value={userNameIn}
                    onChange={(e) => {
                      setUserNameIn(e.target.value);
                    }}
                  />
                </div>
                <div className='cmtDetail'>
                  <label>Nhập điểm đánh giá của bạn:</label>
                  <input
                   id='inputText'
                    type="number"
                    placeholder="vd: 10"
                    value={ratingIn}
                    onChange={(e) => {
                      setRatingIn(e.target.value);
                    }}
                  />
                </div>
                <div className='cmtDetail'>
                  <label>Nhập bình luận của bạn:</label>
                  <input
                   id='inputText'
                    type="text"
                    placeholder="tôi thấy ..."
                    value={commentIn}
                    onChange={(e) => {
                      setCommentIn(e.target.value);
                    }}
                  />
                </div>

                <button
                id='cmtBtn'
                  onClick={() => {
                    creatComment({
                      idHotel: params.id,
                      userName: userNameIn,
                      rating: ratingIn,
                      comment: commentIn,
                    });
                  }}
                >
                  Gửi
                </button>
              </div>
              <div className="otherCmt">
                 <div id='danhgiaTitle2'> Các đánh giá khác </div>
                <div>
                  {(cmts || []).map((cmt) => {
                    return ( <div className='otherCmtBox'>
                         <img id='avaCmt' src={require('./Img/Ava cmt/img.png')}/>
                                   <div className='userCmtInfo'>
                                      <div className='otherCmtDetail'>Người dùng: {cmt.userName}</div>
                                      <div className='otherCmtDetail'>
                                           <div> Đánh giá: {cmt.rating} </div>
                                           
                                       </div >
                                      <div className='otherCmtDetail' >"{cmt.comment}"</div>
                                   </div>
                          </div>
                    );
                  })}
                </div>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

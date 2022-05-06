import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { IoMdPin } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const CityDetail = () => {
  const params = useParams();
  console.log(params);

  const [cityDetails, setCityDetail] = useState([]);
  const [searchWithNameHotel, setSearchWithNameHotel] = useState("");

  const handleFetchHotelListDetail = async () => {
    const response = await fetch(
      "https://6268162901dab900f1c9969b.mockapi.io/hotelList"
    );
    const dataHotel = await response.json();
    const data = dataHotel.filter((item) => {
      return item.city === params.name;
    });
    console.log("city ", data);
    setCityDetail(data);
  };

  const handleChangeWithName = (e) => {
    setSearchWithNameHotel(e.target.value);
  };

  const handleFetchWithName = () => {
    const resultName = cityDetails.filter((hotel) => {
        return hotel.name
          .toLowerCase()
          .trim()
          .includes(searchWithNameHotel.trim());
      }
    );
    setCityDetail(resultName);
  };

  useEffect(() => {
    handleFetchHotelListDetail();
    handleFetchWithName();
  }, [searchWithNameHotel]);

  return (
    <div>
      <div className="searchWithName">
        <>Tim theo ten khach san</>
        <input
          type="text"
          placeholder="nhap ten khach san"
          value={searchWithNameHotel}
          onChange={handleChangeWithName}
        />
      </div>
      <div className="suggestionContainer">
        <div className="suggestionTitle">{params.name}</div>
        <div className="suggestionSubContainer">
          {cityDetails.map((suggestionHotel) => {
            return (
              <div key={suggestionHotel.id} className="suggestionHotelCard">
                <div className="suggestionHotelCardInside">
                  <img
                    src={require(`` + suggestionHotel.img1 + ``)}
                    className="suggestionHotelImg"
                  />
                  <div className="suggestHotelCardInfo">
                    <div className="suggestHotelCardName">
                      {suggestionHotel.name}
                    </div>
                    <div className="suggestHotelCardDetail">
                      <div className="suggestHotelCardStar">
                        {suggestionHotel.star}
                        <BsStarFill style={{ color: "orange" }} />
                      </div>
                      <div className="suggestHotelCardAddress">
                        <IoMdPin style={{ color: "red" }} />
                        <i> {suggestionHotel.address} </i>
                      </div>
                    </div>
                    <div className="suggestHotelCardIntro">
                      <i>"{suggestionHotel.introduce}" </i>
                    </div>
                  </div>
                </div>
                <div className="suggestHotelCardRatingCon">
                  <div className="suggestHotelCardRating">
                    <div> Rating </div>
                    {suggestionHotel.totalRating}
                  </div>

                  <div className="suggestHotelCardPrice">
                    <div className="suggestPriceTitle"> Giá mỗi đêm từ </div>
                    <div className="suggestPrice">
                      {" "}
                      {suggestionHotel.averagePrice}
                      <span>VND</span>{" "}
                    </div>
                  </div>
                  <NavLink to={`/hotels/${suggestionHotel.id}`}>
                    {" "}
                    <button className="checkRooms">
                      Kiểm tra phòng trống
                    </button>{" "}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

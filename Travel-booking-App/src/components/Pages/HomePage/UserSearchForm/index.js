import "./style.css";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

export const UserSearchForm = () => {
  const [searchNameHotel, setSearchNameHotel] = useState([]);
  const [searchWithNameHotel, setSearchWithNameHotel] = useState("");
  const [searchAddressHotel, setSearchAddressHotel] = useState([]);
  const [searchWithAddressHotel, setSearchWithAddressHotel] = useState("");
  const [hotelDetail, setHotelDetail] = useState([]);

  const handleFetchHotel = async () => {
    const response = await fetch(
      "https://6268162901dab900f1c9969b.mockapi.io/appi/v1/hotelList"
    );
    const Hotel = await response.json();
    setHotelDetail(Hotel);
  };

  const handleChangeWithName = (e) => {
    setSearchWithNameHotel(e.target.value);
  };

  const handleFetchWithName = () => {
    const resultName = hotelDetail.filter((hotel) => {
      return hotel.name
        .toLowerCase()
        .includes(searchWithNameHotel.toLowerCase());
    });
    setSearchNameHotel(resultName);
  };

  const handleChangeWithAddress = (e) => {
    setSearchWithAddressHotel(e.target.value);
  };

  const handleFetchWithAddress = () => {
    const resultAddress = hotelDetail.filter((hotel) => {
      return hotel.address
        .toLowerCase()
        .includes(searchWithAddressHotel.toLowerCase());
    });
    setSearchAddressHotel(resultAddress);
  };

  useEffect(() => {
    handleFetchHotel();
  }, []);

  useEffect(() => {
    handleFetchWithName();
    handleFetchWithAddress();
  }, [searchWithNameHotel, searchWithAddressHotel]);

  return (
    <div className="search-container">
      <div className="searchForm">
        SearchForm
        <div>
          <div className="searchWithName">
            <Link to={`${searchWithNameHotel}`}>Tim theo ten khach san</Link>
            <input
              type="text"
              placeholder="nhap ten khach san"
              value={searchWithNameHotel}
              onChange={handleChangeWithName}
            />
          </div>
          <div className="searchWithAddress">
            <Link to={`${searchWithAddressHotel}`}>Tim theo dia diem muon den</Link>
            <input
              type="text"
              placeholder="nhap noi ban muon den"
              value={searchWithAddressHotel}
              onChange={handleChangeWithAddress}
            />
          </div>
          <ul>
            {searchNameHotel.map((item) => {
              return (
                <button
                  onClick={() => {
                    setSearchWithNameHotel(item.name);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </ul>
          <ul>
            {searchAddressHotel.map((item) => {
              return (
                <button
                  onClick={() => {
                    setSearchWithAddressHotel(item.address);
                  }}
                >
                  {item.address}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export * from './UserSearchWithNameHotel'
export * from './UserSearchWithAddressHotel'
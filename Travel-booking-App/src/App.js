import "./App.css";
import {
  HeaderBar,
  HotelsDetailPage,
  CityPage,
  Payment,
  HelpSection,
  FooterBar,
  HotelsDetail,
  DiscountPage,
} from "./components";
import { CityDetail } from "./components/Pages/CityPage/City Details";
import { PaymentForm } from "./components/Pages/PaymentPage/PaymentForm/PaymentForm";
import { HomePage } from "./components/Pages/HomePage/home";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./components/Pages/UserPage";
import { AccountData } from "./components/Datas/UserData/accountData";
import { HotelsDetailWithSearch } from "./components/Pages/HomePage/UserSearchForm/UserSearchWithNameHotel";
import { useState, useEffect } from "react";

function App() {
  const [showBtn, setShowBtn] = useState(false);
  const BackTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const scrollToTop = () => {
    setShowBtn(document.documentElement.scrollTop > 0 ? true : false);
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollToTop);
    return () => {
      document.removeEventListener("scroll", scrollToTop);
    };
  });
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discount" element={<DiscountPage />} />
        <Route path="/hotels" element={<HotelsDetailPage />}>
          <Route path=":id" element={<HotelsDetail />} />
        </Route>
        <Route path="/city" element={<CityPage />}>
          <Route path=":name" element={<CityDetail />} />
        </Route>
        <Route path=":searchWithNameHotel" element={<HotelsDetailWithSearch />}/>
        <Route path=":searchWithAddressHotel" element={<CityDetail />} />
        <Route path="/payment" element={<Payment />}>
          <Route path=":id" element={<PaymentForm />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <AccountData />
      <HelpSection />
      <FooterBar />
      {showBtn && (
        <button className="topBtn" onClick={BackTop}>
          back to TOP
        </button>
      )}
    </div>
  );
}

export default App;

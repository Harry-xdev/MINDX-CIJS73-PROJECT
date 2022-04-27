import './App.css';
import { BannerSection } from './components/PageHeader/BannerSection';
import { DiscountContainer } from './components/Pages/HomePage/DiscountSection';
import { HeaderBar } from './components/PageHeader/HeaderBar';
import { Suggestion } from './components/Pages/HomePage/Suggestion';
import { VacationRentals } from './components/Pages/HomePage/VacationRentals'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <BannerSection />
      <DiscountContainer />
      <Suggestion />  
      <VacationRentals />

    <img src={require ('./components/Datas/Images/Hotel-Images/H-01-R1.jpg')}/>
    <img src="https://cdn6.agoda.net/images/property/highlights/transfer.svg"/>
    </div>
  );
}

export default App;

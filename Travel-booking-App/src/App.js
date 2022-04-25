import './App.css';
import { BannerSection } from './components/PageHeader/BannerSection';
import { DiscountContainer } from './components/HomePage/DiscountSection';
import { HeaderBar } from './components/PageHeader/HeaderBar';
import { Suggestion } from './components/HomePage/Suggestion';
import { VacationRentals } from './components/HomePage/VacationRentals'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <BannerSection />
      <DiscountContainer />
      <Suggestion />  
      <VacationRentals />



    </div>
  );
}

export default App;

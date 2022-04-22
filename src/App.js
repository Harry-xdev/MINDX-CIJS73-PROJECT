import './App.css';
import { BannerSection } from './components/BannerSection';
import { DiscountContainer } from './components/DiscountSection';
import { HeaderBar } from './components/HeaderBar';
import { Suggestion } from './components/Suggestion';
import { VacationRentals } from './components/VacationRentals'

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

import './App.css';
import { BannerSection } from './components/PageHeader/BannerSection';
import { DiscountContainer } from './components/Pages/HomePage/DiscountSection';
import { HeaderBar } from './components/PageHeader/HeaderBar';
import { Suggestion } from './components/Pages/HomePage/Suggestion';
import { VacationRentals } from './components/Pages/HomePage/VacationRentals'
import { UserSearchForm} from './components/PageHeader/UserSearchForm'
function App() {
  return (
    <div className="App">
      <HeaderBar />
      <BannerSection />
      <UserSearchForm/>
      <DiscountContainer />
      <Suggestion />  
      <VacationRentals />

    
    </div>
  );
}

export default App;

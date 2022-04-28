import './App.css'
import { HeaderBar, HotelsDetailPage, CityPage, Payment } from './components';
import { HomePage } from './components/Pages/HomePage/home'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels' element={<HotelsDetailPage />} />
        <Route path='/city' element={<CityPage />} />
        <Route path='/payment' element={<Payment />} />
       

      </Routes>



    </div>
  );
}

export default App;

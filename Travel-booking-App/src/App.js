import './App.css'
import { HeaderBar, HotelsDetailPage, CityPage, Payment } from './components';
import { HomePage } from './components/Pages/HomePage/home'
import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp } from './components/Pages/UserPage';
import { AccountData } from './components/Datas/UserData/accountData'



function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels' element={<HotelsDetailPage />} />
        <Route path='/city' element={<CityPage />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
      <AccountData />



    </div>
  );
}

export default App;

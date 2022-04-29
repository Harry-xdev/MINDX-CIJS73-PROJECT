import './App.css'
import { HeaderBar, HotelsDetailPage, CityPage, Payment } from './components';
import { HomePage } from './components/Pages/HomePage/home'
import { Route, Routes } from 'react-router-dom'
import { LoginForm, SignUpForm } from './components/Pages/LoginPage';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels' element={<HotelsDetailPage />} />
        <Route path='/city' element={<CityPage />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
       

      </Routes>



    </div>
  );
}

export default App;

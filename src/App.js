import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Home from './Components/home/Home';
import Deals from './Components/deal\'s/Deals';
import Navbar from './Components/Navbar';
import DetailsCoupon from './Components/deal\'s/DetailsCoupon';
import Popup from './Components/home/Popup';
import GiftCards from './Components/giftcards/GiftCards';
import Offers from './Components/home/Offers';
import Stores from './Components/topstores/Stores';
import { useEffect } from 'react';
import HomeStores from './Components/topstores/HomeStores';
import Banners from './Components/home/Banners';
import Footer from './Components/Footer';
import CategoriesStores from './Components/categories/CategoriesStores';
import Signup from './Components/signup/Signup';
import Login from './Components/signup/Login';
import DealsCoupon from './Components/home/DealsCoupons';




function ScrollToTop(){

  const { pathname }=useLocation();

useEffect(()=>{
  window.scrollTo(0,0);
},[pathname])

 return null;
}

function App() {
  return (
    <div className='bg-white'>

<Router>
  <ScrollToTop/>
   <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/deals' element={<Deals/>}/>
      <Route path='/detailscoupon' element={<DetailsCoupon/>}/>
      <Route path='/detailscoupon/:title' element={<DetailsCoupon/>}/>
      <Route path='/popup' element={<Popup/>}/>
      <Route path='/giftcards' element={<GiftCards/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/stores' element={<Stores/>}/>
      <Route path='/homestores' element={<HomeStores/>}/>
      <Route path="/banners" element={<Banners/>}/>
      <Route path='/categoriesstores' element={<CategoriesStores/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dealscoupon' element={<DealsCoupon/>}/>
   
    </Routes>
    <Footer/>
   </Router>
    </div>
   
  );
}

export default App;

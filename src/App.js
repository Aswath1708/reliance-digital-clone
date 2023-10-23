import './styles/App.css'
import CategoriesBar from "./pages/home/CategoriesBar";
import Navbar from "./pages/home/Navbar";
import Login from './pages/authentication/Login';
import Footer from './components/footer/Footer';
import SignUp from './pages/authentication/SignUp';
import NavList from './pages/home/NavList';
import Cart from './pages/cart/EmptyCart';
import EmptyCart from './pages/cart/EmptyCart';
import FindAStore from './pages/findastore/FindAStore';
import ContactUs from './pages/contactus/ContactUs';
import { Route, Routes } from 'react-router-dom';
import OffersBoard from './pages/home/OffersBoard';
import ProductsContainer from './pages/home/ProductsContainer';


function App() {
  return <div className="App">
    <NavList/>
    <Navbar/>
    <CategoriesBar/>
    <Routes>
      <Route path='/' element={<OffersBoard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/cart' element={<EmptyCart/>}/>
      <Route path='/findastore' element={<FindAStore/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
    </Routes>
    {/* <ProductsContainer/> */}
    <Footer/>
  </div>;
}

export default App;

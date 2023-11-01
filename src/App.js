import "./styles/App.css";
import CategoriesBar from "./components/navbar/CategoriesBar";
import Navbar from './components/navbar/Navbar';
import Login from "./components/authentication/Login";
import Footer from "./components/footer/Footer";
import SignUp from "./components/authentication/SignUp";
import NavList from "./components/navbar/NavList";
import EmptyCart from "./components/cart/EmptyCart";
import FindAStore from "./components/findastore/FindAStore";
import ContactUs from "./components/contactus/ContactUs";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetails/ProductDetails";
import LoginModal from "./components/authentication/LoginModal";

function App() {
  return (
    <div className="App">
      <NavList />
      <Navbar />
      <CategoriesBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/cart" element={<EmptyCart />} />
        <Route path="/findastore" element={<FindAStore />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/id/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
      {/* <LoginModal/> */}
    </div>
  );
}

export default App;

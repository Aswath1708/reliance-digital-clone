import "./styles/App.css";
import CategoriesBar from "./components/navbar/CategoriesBar";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/authentication/Login";
// import Footer from "./components/footer/Footer";
import SignUp from "./components/authentication/SignUp";
import NavList from "./components/navbar/NavList";
import EmptyCart from "./components/cart/EmptyCart";
import FindAStore from "./components/findastore/FindAStore";
import ContactUs from "./components/contactus/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetails/ProductDetails";
import { createContext, useEffect, useState } from "react";
import SearchedItems from "./components/searcheditems/SearchedItems";
import FilterByNavList from "./components/filterbynavlist/FilterByNavList";
import Cart from "./components/cart/Cart";
// import Disclaimer from "./components/footer/Disclaimer";
import { register } from "swiper/element/bundle";

register();

export const productListContext = createContext();

function App() {
  // const [productList, setProductList] = useState([]);
  const [JWTtoken, setJWTtoken] = useState("");

  const [showNavList, setShowNavList] = useState(false);

  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    if (pathname == "/") setShowNavList(false);
    else setShowNavList(true);
  }, [pathname]);

  return (
    <>
      <productListContext.Provider value={{ JWTtoken, setJWTtoken }}>
        <div>
          <span className="sticky">
            {" "}
            {showNavList && <NavList />}
            <Navbar />
            <CategoriesBar />
          </span>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/cart" element={<EmptyCart />} />
            <Route path="/findastore" element={<FindAStore />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/id/:id" element={<ProductDetails />} />
            <Route path="/searchterm/:searchterm" element={<SearchedItems />} />
            <Route path="/filter/:filter" element={<FilterByNavList />} />
          </Routes>
          {/* <Cart/> */}
        </div>
      </productListContext.Provider>
    </>
  );
}

export default App;

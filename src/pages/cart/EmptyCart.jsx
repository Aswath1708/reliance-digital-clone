import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate=useNavigate();
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      padding:"4rem"
    }}>
      <img
        src="https://www.reliancedigital.in/build/client/images/emptycart.png"
        alt="empty-shopping-cart"
      />
      <p style={{color:"#333",fontSize:"20px"}}>Your Shopping Cart is Empty</p>
      <button style={{
        backgroundColor:"#e4252a",
        color:"#fff",
        fontFamily:"inherit",
        fontWeight:"600",
        padding:"0.75rem 2.5rem",
        border:"none",
        borderRadius:"0.25rem",
        marginTop:"4rem"
      }} onClick={()=>{navigate("/")}}>CONTINUE SHOPPING</button>
    </div>
  );
};

export default EmptyCart;

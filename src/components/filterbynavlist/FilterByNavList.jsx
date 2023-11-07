import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ProductCard from "../home/ProductCard";
import emptyCart from "../../assets/emptysearchpage/preview.jpg";
import Loader from '../loader/Loader';
import { getProjectId } from "../../utils/getProjectId";

const FilterByNavList = () => {
  const notify = (message) => {
    toast(message, { type: "error" });
  };
  const { filter } = useParams();

  const [filterTerm, setFilterTerm] = useState(filter);
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const fetchFilteredProducts = () => {
    setIsLoading(true);
    axios
      .get(
        // https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${searchterm}
        // filterTerm == "camera"
        //   ? `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"camera"}`
        //   : `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"subCategory":"${filter}"}`,
        `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"subCategory":"${filter}"}`,
        {
          headers: {
            projectID: `${getProjectId()}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setFilterTerm(filter);
        setFilteredDataList([...res.data.data]);
        // setSearchTerm()
      })
      .catch((err) => {
        console.log(err);
        notify(err.response.data.message);
        console.log(filteredDataList);
        setFilteredDataList([]);
      })
      .finally(()=>{
        setTimeout(()=>setIsLoading(false),1000)
      })
  };
  useEffect(() => {
    fetchFilteredProducts();
  }, [filter]);
  return (
    <>
    <div style={{ color: "#000" }}>
    {filteredDataList.length > 0 && (
      <header
        style={{
          padding: "1%",
        }}
      >
        {" "}
        <h2>{filterTerm.toUpperCase()}</h2>
        <p style={{ color: "#3d3d3d" }}>
          ( {filteredDataList.length} products )
        </p>
      </header>
    )}

    <ToastContainer />

    {isLoading?<Loader/>:(filteredDataList.length > 0 ? (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          padding: "2%",
          backgroundColor: "#ddd",
        }}
      >
        {filteredDataList.map((data, i) => {
          return <ProductCard key={i} {...data} />;
        })}
      </div>
    ) : (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={emptyCart} alt="empty cart" style={{ width: "60%" }} />
      </div>
    ))}
  </div>
  </>
  );
};

export default FilterByNavList;

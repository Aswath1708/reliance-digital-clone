import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import emptyCart from "../../assets/emptysearchpage/preview.jpg";
import styles from "../../styles/SearchItems.module.css";
import ProductCard from "../home/ProductCard";
import { getProjectId } from "../../utils/getProjectId";

const SearchedItems = () => {
  const notify = (message) => {
    toast(message, { type: "error" });
  };

  const navigate = useNavigate();

  const { searchterm } = useParams();
  const [searchedDataList, setSearchedDataList] = useState([]);

  const fetchSearchedProducts = () => {
    axios
      .get(
        `https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?search={"name":"${searchterm}"}`,
        {
          headers: {
            projectID: `${getProjectId()}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setSearchedDataList([...res.data.data]);
        // setSearchTerm()
      })
      .catch((err) => {
        setSearchedDataList([]);
        console.log(err);
        notify(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchSearchedProducts();
  }, [searchterm]);
  return (
    <div style={{ color: "#000" }}>
      {searchedDataList.length > 0 && (
        <header
          style={{
            padding: "1%",
          }}
        >
          {" "}
          <h2>{searchterm.toUpperCase()}</h2>
          <p style={{ color: "#3d3d3d" }}>
            ( {searchedDataList.length} products )
          </p>
        </header>
      )}

      <ToastContainer />

      {searchedDataList.length > 0 ? (
        <div className={styles.searchItemsContainer}>
          {searchedDataList.map((data, i) => {
            return <ProductCard key={i} {...data} />;
          })}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={emptyCart} alt="empty cart" style={{ width: "60%" }} />
        </div>
      )}
    </div>
  );
};

export default SearchedItems;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ProductCard from "../home/products/ProductCard";
import emptyCart from "../../assets/emptysearchpage/preview.jpg";
import Loader from "../loader/Loader";
import { getProjectId } from "../../utils/getProjectId";
import styles from "../../styles/products/FilterByNavList.module.css";

const FilterByNavList = () => {
  const notify = (message) => {
    toast.error(message);
  };
  const { filter } = useParams();

  const [filterTerm, setFilterTerm] = useState(filter);
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchFilteredProducts = () => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    axios
      .get(
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
      })
      .catch((err) => {
        console.log(err);
        notify(err.response.data.message);
        console.log(filteredDataList);
        setFilteredDataList([]);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  };
  useEffect(() => {
    fetchFilteredProducts();
  }, [filter]);
  return (
    <div className={styles.container}>
      {filteredDataList.length > 0 && (
        <header>
          {" "}
          <h2>{filterTerm.toUpperCase()}</h2>
          <p>( {filteredDataList.length} products )</p>
        </header>
      )}

      <ToastContainer />

      {isLoading ? (
        <Loader />
      ) : filteredDataList.length > 0 ? (
        <div className={styles.cardsContainer}>
          {filteredDataList.map((data, i) => {
            return <ProductCard key={i} {...data} />;
          })}
        </div>
      ) : (
        <div className={styles.emptyResultsContainer}>
          <img src={emptyCart} alt="empty cart" />
        </div>
      )}
    </div>
  );
};

export default FilterByNavList;

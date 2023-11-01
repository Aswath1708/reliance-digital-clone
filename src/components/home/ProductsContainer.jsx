import React, { useEffect, useState } from "react";
import ProductCard from "../../components/home/ProductCard";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import styles from '../../styles/ProductsContainer.module.css';

const ProductsContainer = () => {
  const [productListData, setProductListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products",
        {
          headers: {
            projectID: "f104bi07c490",
          },
        }
      )
      .then((res) => {
        setProductListData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(()=>{setTimeout(()=>setIsLoading(false),1500)})
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.productsContainer}>
          {productListData.map((data, i) => {
            return <ProductCard key={i} {...data} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductsContainer;

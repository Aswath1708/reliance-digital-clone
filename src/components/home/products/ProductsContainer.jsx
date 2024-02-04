import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../loader/Loader";
import styles from "../../../styles/products/ProductsContainer.module.css";

import { productListContext } from "../../../App";
import { getProjectId } from "../../../utils/getProjectId";
import SliderSection from "./SliderSection";

const ProductsContainer = () => {
  // const [productListData, setProductListData] = useState([]);
  // const { productList, setProductList } = useContext(productListContext);
  const [productList,setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products",
        {
          headers: {
            projectID: `${getProjectId()}`,
          },
        }
      )
      .then((res) => {
        setProductList(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);

  return (
    <div className={styles.productsContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.productsSection}>
          <p>Upto 22% offer on Televisions</p>
          {/* <h2 style={{color:"#000"}}>Slider</h2> */}
          <SliderSection productList={productList} />
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;

import React, { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/home/ProductCard";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import styles from "../../styles/ProductsContainer.module.css";
import Slider from "react-slick";
import NextArrow from "../productDetails/sliderarrows/NextArrow";
import PrevArrow from "../productDetails/sliderarrows/PrevArrow";
import { productListContext } from "../../App";
// import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
// import 'pure-react-carousel/dist/react-carousel.es.css';

const ProductsContainer = () => {
  const sliderProps = {
    accessibility: true,
    slidesToShow: 5,
    centerMode: false,
    swipe: true,
    infinite: false,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // const [productListData, setProductListData] = useState([]);
  const { productList, setProductList } = useContext(productListContext);
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
        setProductList(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        // <div className={styles.productsContainer}>
        //   {productListData.map((data, i) => {
        //     return <ProductCard key={i} {...data} />;
        //   })}
        // </div>
        <div style={{ paddingBottom: "1%" }}>
          <p
            style={{
              color: "#000",
              fontWeight: 700,
              padding: "2%",
            }}
          >
            Upto 22% offer on Televisions
          </p>
          <Slider {...sliderProps} className={styles.productsContainer}>
            {productList
              .filter((data) => data.subCategory === "tv")
              .map((data, i) => {
                return <ProductCard key={i} {...data} />;
              })}
          </Slider>
        </div>
        // <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125}>
        //   <Slider>
        //     {productListData.map((data, i) => {
        //       return (
        //         <Slide key={i} index={i}>
        //           <ProductCard  {...data} />
        //         </Slide>
        //       );
        //     })}
        //   </Slider>
        // </CarouselProvider>
      )}
    </>
  );
};

export default ProductsContainer;

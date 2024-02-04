// import React from "react";
// import ProductCard from "./ProductCard";

// const SliderSection = ({ productList }) => {

//   return (
//     <>
//     <swiper-container
//       navigation="true"
//       slides-per-view="6"
//       style={{ width: "90vw", backgroundColor: "blue" }}
//       space-between="10"

//       // breakpoints={

//       //     {0:{
//       //       slides-per-view:1
//       //       space-between:"10"
//       //     }}
//       //     // 480:{
//       //     //   slidesPerView:2,
//       //     //   spaceBetween:10
//       //     // },
//       //     // 768:{
//       //     //   slidesPerView:3,
//       //     //   spaceBetween:15
//       //     // },
//       //     // 1024:{
//       //     //   slidesPerView:4,
//       //     //   spaceBetween:15
//       //     // }

//       // }
//     >

//       {productList
//         .filter((data) => data.subCategory === "tv")
//         .map((data, i) => {
//           return (
//             <swiper-slide>
//               <ProductCard key={i} {...data} />
//             </swiper-slide>
//           );
//         })}

//     </swiper-container>
//     <swiper-container
//       navigation="true"
//       slides-per-view="6"
//       style={{ width: "90vw", backgroundColor: "blue" }}
//       space-between="10"
//       // breakpoints={

//       //     {0:{
//       //       slides-per-view:1
//       //       space-between:"10"
//       //     }}
//       //     // 480:{
//       //     //   slidesPerView:2,
//       //     //   spaceBetween:10
//       //     // },
//       //     // 768:{
//       //     //   slidesPerView:3,
//       //     //   spaceBetween:15
//       //     // },
//       //     // 1024:{
//       //     //   slidesPerView:4,
//       //     //   spaceBetween:15
//       //     // }

//       // }
//     >

//       {productList
//         .filter((data) => data.subCategory === "tv")
//         .map((data, i) => {
//           return (
//             <swiper-slide>
//               <ProductCard key={i} {...data} />
//             </swiper-slide>
//           );
//         })}

//     </swiper-container>
//     </>
//   );
// };

// export default SliderSection;

// import React from "react";
// // import 'swiper/css';

// import ProductCard from "./ProductCard";

// // import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// // import { Swiper, SwiperSlide } from "swiper/react";

// // import 'swiper/swiper.min.css'; // Import Swiper styles

// // import 'swiper/css';

// import 'swiper/css/navigation';

// // Import Swiper React components

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles

// import 'swiper/css';

// // Import Swiper styles

// // import 'swiper/css/navigation';

// const SliderSection = ({ productList }) => {
//   const slidesPerView = {
//     320: 1, // screen width < 320px, show 1 slide

//     480: 2, // screen width < 480px, show 2 slides

//     768: 3, // screen width < 768px, show 3 slides

//     992: 4, // screen width < 992px, show 4 slides

//     1200: 6, // screen width < 1200px, show 6 slides
//   };

//   return (
//     <Swiper
//       navigation={true}
//       style={{ width: "90vw" }}
//       spaceBetween={10}
//       slidesPerView={slidesPerView}
//     >
//       {productList

//         .filter((data) => data.subCategory === "tv")

//         .map((data, i) => (
//           <SwiperSlide key={i}>
//             <ProductCard {...data} />
//           </SwiperSlide>
//         ))}
//     </Swiper>
//   );
// };

// export default SliderSection;

// import React from "react";

// import Carousel from "react-multi-carousel";

// import ProductCard from "./ProductCard";

// const SliderSection = ({ productList }) => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },

//       items: 5,
//     },

//     desktop: {
//       breakpoint: { max: 3000, min: 768 },

//       items: 4,
//     },

//     mobile: {
//       breakpoint: { max: 768, min: 0 },

//       items: 3,
//     },
//   };

//   return (
//     <>
//       <h3>Hello</h3>

//       <Carousel responsive={responsive} infinite={true}>
//         {productList.map((product, i) => (
//           <ProductCard key={i} {...product} />
//         ))}
//       </Carousel>
//     </>
//   );
// };

// export default SliderSection;

// import React from "react";
// import ProductCard from "./ProductCard";
// import Carousel from "react-multi-carousel";

// const SliderSection = ({ productList }) => {

//   const responsive = {
//         superLargeDesktop: {
//           breakpoint: { max: 4000, min: 3000 },

//           items: 5,
//         },

//         desktop: {
//           breakpoint: { max: 3000, min: 768 },

//           items: 4,
//         },

//         mobile: {
//           breakpoint: { max: 768, min: 0 },

//           items: 3,
//         },
//       };

//   return (

//     <swiper-container
//       navigation="true"
//       slides-per-view="6"
//       style={{ width: "90vw", backgroundColor: "blue" }}
//       space-between="10"
//       // breakpoints={

//       //     {0:{
//       //       slides-per-view:1
//       //       space-between:"10"
//       //     }}
//       //     // 480:{
//       //     //   slidesPerView:2,
//       //     //   spaceBetween:10
//       //     // },
//       //     // 768:{
//       //     //   slidesPerView:3,
//       //     //   spaceBetween:15
//       //     // },
//       //     // 1024:{
//       //     //   slidesPerView:4,
//       //     //   spaceBetween:15
//       //     // }

//       // }
//     >

//       {productList
//         .filter((data) => data.subCategory === "tv")
//         .map((data, i) => {
//           return (
//             <Carousel responsive={responsive} infinite={true}>
//               <ProductCard key={i} {...data} />
//             </Carousel>
//           );
//         })}

//     </swiper-container>
//   );
// };

// export default SliderSection;

import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const SliderSection = ({ productList }) => {
  const carouselResponsiveSettings = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },

    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 4,
    },

    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
  };

  return (
    <div style={{width:"90vw"}}>

      <Carousel responsive={carouselResponsiveSettings} infinite>
        {productList.map((product, i) => {
          return <div><ProductCard key={i} {...product} /></div> ;
        })}
      </Carousel>
    </div>
  );
};

SliderSection.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the expected shape of your product object
      // For example: id, name, price, etc.
    })
  ).isRequired,
};

export default SliderSection;

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const OffersBoardOne = () => {
  const ArrayOfLinks = [
    "https://www.reliancedigital.in/medias/Bank-Bonanza-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMDc3NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2hhMC8xMDA0MTY3MDMwMzc3NC5qcGd8YmMzMDc3NDYxNWY1NDUxMmMxZDNkNjFjM2EyMGMwZmNjNDU4NGUwMzJlMzU2ZGU4MWIxZjYyOGMzNjAyZTA3ZQ",
    "https://www.reliancedigital.in/medias/Weekend-Offer-Sat-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMjUzMDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDFkL2gyYS8xMDA1NzUwNjQ4ODM1MC5qcGd8M2NiNTc4YTY4NDY1NDZiZGE4YTlkZDBkYzBjNDk3MmIzNTI3MmU0NmJmOTk5NzMxOTdmOGMzZWU1MDg2MGE4Mg",
    "https://www.reliancedigital.in/medias/Digital-September-Sale-Saturday-Carousel-Banner-26-09-2023-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjY2NzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA5L2g4OC8xMDA1NzUwNzExMDk0Mi5qcGd8OTc2NDViYmI4MTA2NzU3Nzk2ZmI4MzQ3ODYwNDkwMTI1NzAyYzY1YjgzYTk5NDU4ZjA3YzQ5ZGU2MjVmYWUwOQ",
  ];

  const [state, setState] = useState(0);

  // useEffect(()=>{
  //   setInterval(() => {
  //     if(state===2){
  //       setState(0);
  //     }else{
  //       setState(state+1);
  //     }
  //   }, 3000);
  // },[state])

  const handleClick = ({ target }) => {
    console.log(target);
    if (
      target.className === "svg-inline--fa.fa-chevron-left" ||
      target.className === "scroll-left"
    ) {
      if (state >= 1) {
        setState(state - 1);
      } else {
        setState(2);
      }
    } else {
      if (state < 2) {
        setState(state + 1);
      } else {
        setState(0);
      }
    }
  };

  return (
    <div className="offers-Board-one">
      <button className="scroll-left" onClick={handleClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img src={ArrayOfLinks[state]} alt={`Offer-Board-img-${state}`} />
      <button className="scroll-right" onClick={handleClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default OffersBoardOne;

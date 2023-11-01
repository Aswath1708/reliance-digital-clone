import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OffersBoardOne = () => {
  const ArrayOfLinks = [
    "https://www.reliancedigital.in/medias/Bank-Bonanza-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxMDc3NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2hhMC8xMDA0MTY3MDMwMzc3NC5qcGd8YmMzMDc3NDYxNWY1NDUxMmMxZDNkNjFjM2EyMGMwZmNjNDU4NGUwMzJlMzU2ZGU4MWIxZjYyOGMzNjAyZTA3ZQ",
    "https://www.reliancedigital.in/medias/Weekend-Offer-Sat-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMjUzMDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDFkL2gyYS8xMDA1NzUwNjQ4ODM1MC5qcGd8M2NiNTc4YTY4NDY1NDZiZGE4YTlkZDBkYzBjNDk3MmIzNTI3MmU0NmJmOTk5NzMxOTdmOGMzZWU1MDg2MGE4Mg",
    "https://www.reliancedigital.in/medias/Digital-September-Sale-Saturday-Carousel-Banner-26-09-2023-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjY2NzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA5L2g4OC8xMDA1NzUwNzExMDk0Mi5qcGd8OTc2NDViYmI4MTA2NzU3Nzk2ZmI4MzQ3ODYwNDkwMTI1NzAyYzY1YjgzYTk5NDU4ZjA3YzQ5ZGU2MjVmYWUwOQ",
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} stopOnHover={false}>
      {ArrayOfLinks.map((url, i) => {
        return (
          <div key={i}>
            <img src={url} alt={`poster${i + 1}`} />
          </div>
        )
      })}
    </Carousel>
  );
};

export default OffersBoardOne;

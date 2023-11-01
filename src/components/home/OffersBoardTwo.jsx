import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OffersBoardTwo = () => {
  const ArrayOfLinks = [
    "https://www.reliancedigital.in/medias/iPhone-15.jpg?context=bWFzdGVyfGltYWdlc3w0MDk3NnxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDA5LzEwMDU2MDU3MjU4MDE0LmpwZ3w5YTdlMmE1ZjBjNDBjY2M5ODE2N2JhNDhiMDZiMjU4ZWI4NTA0ZjE4NzgxODgxOGU4ZWIwMGM0ZTZlNTA2NTNh",
    "https://www.reliancedigital.in/medias/Mobile-Days-Carousel-Banner-31-07-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMjY4MjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA4L2gzOC8xMDA1NzQ5ODQyNzQyMi5qcGd8Y2MwZDBkN2E1Y2RhNjczMDcwODhiYTA4ZTYxMDQ3OGUyMzk3ZmY1ODQzZGRkMzMyOWFhZDkwYzI4ODNhNjVlMw",
    "https://www.reliancedigital.in/medias/World-Cup-Carousel-Banner-28-09-2023-D.jpg?context=bWFzdGVyfGltYWdlc3wxOTQ5ODl8aW1hZ2UvanBlZ3xpbWFnZXMvaDU3L2hjYi8xMDA1NzE1MjYyNjcxOC5qcGd8MTcwY2Q3NzdmYmNiMTMwZjAzMDI3YTc5ZWZhOTY5NjhiNDM0NzQxNDY4NTkwYjA1OTZhYjRlZDQ1Mjk5MWE4OQ",
    "https://www.reliancedigital.in/medias/Digital-Kitchen-Festival-VM-1365X-260px.jpg?context=bWFzdGVyfGltYWdlc3wxMTk2NDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDYyL2hhMi8xMDA1NTA5MzU4MzkwMi5qcGd8OWM4NjdjZDEwNWM4MDhkNjVhNTMwM2Q0OTE5MzQ2MjRlN2NiNzA2ZWI5NTk5YzgwNGU4MjFhN2MwMDlhNzE2YQ",
    "https://www.reliancedigital.in/medias/Digital-Big-Screen-Fest-Carousel-Banner-14-09-2023-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5NjAxM3xpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDY4LzEwMDUyNDYwMDg1Mjc4LmpwZ3xjMmI2ZDJmZGQ1MjQ0M2JlOGFkM2FlZTBiMjU4MDA2ZWZhNjBkNTFmZDcyMjQ3OGZiYTVlNDhkYWUwNWY3ZjY5",
    "https://www.reliancedigital.in/medias/1365-x-260.png?context=bWFzdGVyfGltYWdlc3wyNzQwNzV8aW1hZ2UvcG5nfGltYWdlcy9oY2MvaDkyLzEwMDU3NDk5NzM4MTQyLnBuZ3w0YWY0ZjY4OTIyY2JlYmYzMzEzODk4NDUyNTQ2MzQ4MTU1Y2VkMjEwMjUxZDgxOWRmODBiMWU2YzhmNGYyYmVl",
    "https://www.reliancedigital.in/medias/Accessories-Fiesta-D-Sep.jpg?context=bWFzdGVyfGltYWdlc3wxMTU2MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDAzL2gxMi8xMDA1NzQ5ODU1ODQ5NC5qcGd8NmNmNDBjZmE0ODJlMjA1NDQyOGY3ODk0ZDNmNWZjYjQzODM4OGFkZGI0MjQxMmFiYWUxMmE1MmRlYTk3MDQ2MQ",
    "https://www.reliancedigital.in/medias/Apple-Watch-Series-9-Banner-D-rev-2.jpg?context=bWFzdGVyfGltYWdlc3wxMDkxNzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDU2L2g2NS8xMDA1Njg5MzY2MTIxNC5qcGd8N2Y4ZWU0YmZjMzRmYTM3NmY0OWVkM2ZhMTA4ZWQyODY5OGIwMTg0NjFlMzcwYzY1YmNiYTRiNmY0OTRkNTk5MA",
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} stopOnHover={false}>
      {ArrayOfLinks.map((url, i) => {
        return(<div key={i}>
          <img src={url} alt="offer-poster" />
        </div>)
      })}
    </Carousel>
  );
};

export default OffersBoardTwo;

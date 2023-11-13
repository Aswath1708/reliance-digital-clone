import brokenImage from "../assets/brokenImage/no-photo.jpg";

export const getBrokenImageEvent = (e) => {
  e.target.src = brokenImage;
  e.target.style.paddingBottom = "1rem";
};

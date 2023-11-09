import septemberSale from "../assets/offersboard/offersboardone/September-Sale.avif";
import bankBonanza from "../assets/offersboard/offersboardone/Bank-Bonanza.avif";
import weekendOffer from "../assets/offersboard/offersboardone/Weekend-Offer.avif";

import accessories from "../assets/offersboard/offersboardtwo/Accessories.avif";
import refrigerator from "../assets/offersboard/offersboardtwo/Refrigerator.avif";
import bigScreen from "../assets/offersboard/offersboardtwo/Digital-Big-Screen.avif";
import kitchen from "../assets/offersboard/offersboardtwo/Digital-Kitchen.avif";
import mobile from "../assets/offersboard/offersboardtwo/Mobile-Days.avif";
import laptop from "../assets/offersboard/offersboardtwo/Laptop.avif";
import television from "../assets/offersboard/offersboardtwo/Television.avif";
import iphone from "../assets/offersboard/offersboardtwo/iPhone-15.webp";

export const getOffersBoardOne = () => [
  bankBonanza,
  weekendOffer,
  septemberSale,
];

export const getOffersBoardTwo = () => [
  { image: iphone, link: "/searchterm/iphone" },
  { image: mobile, link: "/filter/mobile" },
  { image: television, link: "/filter/tv" },
  { image: kitchen, link: "/filter/kitchenappliances" },
  { image: bigScreen, link: "/filter/tv" },
  { image: laptop, link: "/filter/laptop" },
  { image: accessories, link: "/filter/travel" },
  { image: refrigerator, link: "/searchterm/refrigerator" },
];

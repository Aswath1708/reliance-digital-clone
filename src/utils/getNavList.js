import {
  faBellConcierge,
  faLocationDot,
  faRightLeft,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export const getNavList = () => {
  return [
    {
      text: "OUR BRAND PROMISE",
    },
    { text: "EASY RETURN", icon: faRightLeft },
    { text: "NEXT DAY DELIVERY", icon: faTruckFast },
    { text: "SERVICE GUARANTEE", icon: faBellConcierge },
    { text: "UNMATCHED NETWORK" },
    { text: "Find a store", icon: faLocationDot, link: "findastore" },
    { text: "Contact us", link: "contactus" },
  ];
};

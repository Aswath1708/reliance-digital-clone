import {
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const getSocialMediaIcons = () => {
  return {
    socialMediaHeader: "FOLLOW US",
    socialMediaIcons: [
      {
        icon: faSquareFacebook,
        link: "https://www.facebook.com/reliancedigital/",
      },
      { icon: faTwitter, link: "https://twitter.com/reliancedigital" },
      { icon: faYoutube, link: "https://www.youtube.com/reliancedigital" },
    ],
  };
};

import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export const getAppStoreCardText = () => {
  return {
    appStoreHeader: "EXPERIENCE RELIANCE DIGITAL APP ON MOBILE",
    appStoreCardText: [
      {
        icon: faGooglePlay,
        getOn: "GET IT ON",
        appName: "Google Play",
        link:"https://play.google.com/store/apps/details?id=in.digital.reliance"
      },
      {
        icon: faApple,
        getOn: "Download on the",
        appName: "App Store",
        link:"https://apps.apple.com/in/app/reliance-digital-shopping-app/id1513379107"
      },
    ],
  };
};

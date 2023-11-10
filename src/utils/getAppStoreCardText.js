import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export const getAppStoreCardText = () =>{
    return [
        {
            icon:faGooglePlay,
            getOn:"GET IT ON",
            appName:"Google Play"
        },
        {
            icon:faApple,
            getOn:"Download on the",
            appName:"App Store"
        }
    ];
}
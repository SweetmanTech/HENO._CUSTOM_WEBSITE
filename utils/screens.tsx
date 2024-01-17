import MusicContent from "../components/Pages/MusicPage/MusicContent";
import AboutContent from "../components/Pages/AboutPage/AboutContent";
import PressContent from "../components/Pages/PressPage/PressContent";
import MintContent from "../components/Pages/MintPage/MintContent";

export const SCREENS = {
    ABOUT_SCREEN : {
        screenName: "ABOUT_SCREEN",
        href: "/about",
        screen: <AboutContent />
    },
    MUSIC_SCREEN: {
        screenName: "MUSIC_SCREEN",
        href: "/music",
        screen: <MusicContent isPopup />
    },
    WEB3_SCREEN: {
        screenName: "WEB3_SCREEN",
        href: "/mint",
        screen: <MintContent />
    },
    PRESS_SCREEN: {
        screenName: "PRESS_SCREEN",
        href: "/press",
        screen: <PressContent />
    }
}
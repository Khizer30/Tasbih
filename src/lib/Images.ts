import { type ImageSourcePropType } from "react-native";
// ...
import { type Dhikr } from "./Interface";
import logoImg from "../../assets/logo.png";
import backImg from "../../assets/back.png";
import menuLink from "../../assets/menu-link.png";
import rosaryLink from "../../assets/rosary-link.png";
import alhamdulillah from "../../assets/alhamdulillah.png";
import allahuakbar from "../../assets/allahuakbar.png";
import astagfirullah from "../../assets/astagfirullah.png";
import bismillah from "../../assets/bismillah.png";
import durood from "../../assets/durood.png";
import subhanallah from "../../assets/subhanallah.png";

// Export
export const logo: ImageSourcePropType = logoImg;
export const back: ImageSourcePropType = backImg;
export const links: ImageSourcePropType[] = [ menuLink, rosaryLink ];
export const dhikrs: Dhikr[] =
  [
    {
      name: "Alhamdulillah",
      src: alhamdulillah
    },
    {
      name: "Allah-u-Akbar",
      src: allahuakbar
    },
    {
      name: "Astagfirullah",
      src: astagfirullah
    },
    {
      name: "Bismillah",
      src: bismillah
    },
    {
      name: "Durood",
      src: durood
    },
    {
      name: "SubhanAllah",
      src: subhanallah
    }
  ];
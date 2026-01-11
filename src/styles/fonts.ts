import { Parkinsans, Rubik, Open_Sans, Mona_Sans, Montserrat, Be_Vietnam_Pro } from "next/font/google";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  variable: "--font-parkinsans",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
});

export { parkinsans, rubik, openSans, monaSans, montserrat, beVietnamPro };
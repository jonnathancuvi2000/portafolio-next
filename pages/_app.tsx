import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
// card css
import '../css/Proyectos.css'
// swipper css
import '../css/swiper-bundle.min.css'
// card Skill
import '../css/CardSkill.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

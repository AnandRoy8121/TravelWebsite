import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar companyName={"VizagTravel"} />
      <Component {...pageProps} />
    </>
  );
}

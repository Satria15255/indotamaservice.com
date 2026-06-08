import Testimoni from "./page/testimoni";
import Navbar from "./components/navbar";
import Hero from "./page/home";
import CompanyStatistic from "./page/CompanyStatistic";
import About from "./page/about";
import Service from "./page/service";
import Contact from "./page/contact";
import Footer from "./components/footer";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CompanyStatistic />
      <About />
      <Service />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  );
}

import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Care from "./Components/Care/Care";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Health from "./Components/Health/Health";
import Navbar from "./Components/Navbar/Navbar";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <div className="mx-auto max-w-[1160px]">
        <Navbar />
        <Banner />
        <Care />
        <About />
        <Health />
        <Testimonial />
        <Faq />
        <Banner2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;

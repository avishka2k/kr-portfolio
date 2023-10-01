import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Experices from "./components/Experices";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll
        speed={0.09}
      >
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Experices />
        <Skills />
        <Testimonials />
        <Contacts />
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;

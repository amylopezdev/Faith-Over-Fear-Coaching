import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

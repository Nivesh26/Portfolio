import Header from "../Component/Header";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Skills from "../Component/Skills";
import Experience from "../Component/Experience";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
import Projects from "../Component/Projects";
  
const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

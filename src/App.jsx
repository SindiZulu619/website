import { Routes, Route } from "react-router-dom";
import Header from './Header'
import About from "./About";
import Contact from "./Contact";
import Hero from './Hero'
import HeroFeatures from "./HeroFeatures";
import UseCase from './UseCase'
import FeaturesBar from './FeaturesBar'
import IconGrid from "./IconGrid";
import FeaturesSection from "./FeaturesSection";
import Footer from './Footer'
import FooterLinks from "./FooterLinks";
import Form from "./Form";


function Home() {
  return (
    <>
      <Hero />
      <HeroFeatures />
      <FeaturesBar />
      <IconGrid />
      <FeaturesSection />
      <Form />
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<UseCase />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/history" element={<History />} />
      </Routes>

      <Footer />
       <FooterLinks />
    </>
  );
}

export default App;


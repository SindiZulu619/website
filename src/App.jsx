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
import History from "./pages/History";


function Home() {
  return (
    <>
      <Hero />
      <HeroFeatures />
      <FeaturesBar />
      <IconGrid />
      <FeaturesSection />
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
          <Route path="/form" element={<Form />} />
      </Routes>

      <Footer />
       <FooterLinks />
    </>
  );
}

export default App;


import ContactForm from "./components/Contact/Contact";
import CtaSection from "./components/CTA";
import Features from "./components/Feature";
import FooterBlock from "./components/Footer";
import HeroSection from "./components/Hero";
import Project from "./components/Project";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <CtaSection/>
    <Project/>
    <ContactForm/>
    <FooterBlock/>
    </>
  );
}

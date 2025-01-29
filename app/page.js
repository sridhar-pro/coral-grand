import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const HeroSection = dynamic(() => import("./components/Hero"));
const Features = dynamic(() => import("./components/Feature"));
const CtaSection = dynamic(() => import("./components/CTA"));
const Project = dynamic(() => import("./components/Project"));
const ContactForm = dynamic(() => import("./components/Contact/Contact"));
const FooterBlock = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <CtaSection />
        <Project />
        <ContactForm />
      </main>
      <FooterBlock />
    </>
  );
}


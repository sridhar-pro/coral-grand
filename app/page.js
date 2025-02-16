import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/Hero"));
const Features = dynamic(() => import("./components/Feature"));
const CtaSection = dynamic(() => import("./components/CTA"));
const Project = dynamic(() => import("./components/Project"));
const ContactForm = dynamic(() => import("./components/Contact/Contact"));

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Features />
        <CtaSection />
        <Project />
        <ContactForm />
      </main>
    </>
  );
}


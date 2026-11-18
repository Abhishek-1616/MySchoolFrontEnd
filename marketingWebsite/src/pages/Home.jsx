import Hero from "../components/sections/Hero.jsx";
import Trusted from "../components/sections/Trusted.jsx";
import Features from "../components/sections/Features.jsx";
import WhyUs from "../components/sections/WhyUs.jsx";
import HowItWorks from "../components/sections/HowItWorks.jsx";
import Solutions from "../components/sections/Solutions.jsx";
import Preview from "../components/sections/Preview.jsx";
import Stats from "../components/sections/Stats.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Pricing from "../components/sections/Pricing.jsx";
import FAQ from "../components/sections/FAQ.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Features />
      <WhyUs />
      <HowItWorks />
      <Solutions />
      <Preview />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

import PageHeader from "../components/ui/PageHeader.jsx";
import Pricing from "../components/sections/Pricing.jsx";
import FAQ from "../components/sections/FAQ.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

export default function PricingPage() {
  return (
    <>
      <PageHeader title="Pricing" text="Choose the plan that fits your school. Placeholder pricing for now." />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

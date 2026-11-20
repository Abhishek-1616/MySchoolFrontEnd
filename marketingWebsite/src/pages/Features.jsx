import PageHeader from "../components/ui/PageHeader.jsx";
import Features from "../components/sections/Features.jsx";
import WhyUs from "../components/sections/WhyUs.jsx";
import Preview from "../components/sections/Preview.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

export default function FeaturesPage() {
  return (
    <>
      <PageHeader title="Features built for every part of school life" text="From admissions to report cards, every module works together." />
      <Features />
      <Preview />
      <WhyUs />
      <FinalCTA />
    </>
  );
}

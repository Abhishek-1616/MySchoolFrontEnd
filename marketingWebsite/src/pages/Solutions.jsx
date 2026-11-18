import PageHeader from "../components/ui/PageHeader.jsx";
import Solutions from "../components/sections/Solutions.jsx";
import HowItWorks from "../components/sections/HowItWorks.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

export default function SolutionsPage() {
  return (
    <>
      <PageHeader title="Solutions for everyone in your school" text="Administrators, teachers, parents and students each get the tools they need." />
      <Solutions />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}

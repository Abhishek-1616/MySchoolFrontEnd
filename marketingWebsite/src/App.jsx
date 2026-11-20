import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Batch 2: About, Features, Solutions, Pricing, Contact */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

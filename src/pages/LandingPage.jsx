import React from "react";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import Third from "../pages/Third";
import Footer from "../pages/Footer";
import Four from "./Four";
import Second from "./Second";

function LandingPage() {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Hero />
      <Second />
      <Third />
      <Four />
      <Footer />
    </div>
  );
}

export default LandingPage;

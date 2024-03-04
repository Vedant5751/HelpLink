import React from "react";
import LandNav from "../components/LandNav";
import Hero from "../components/Hero";

import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <LandNav />
      <Hero />
      <h1 className="text-3xl bg-yellow-500 mb-24 font-bold underline">
        Project Showcase
      </h1>

      <Footer />
    </>
  );
}
